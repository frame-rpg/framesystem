import * as admin from 'firebase-admin';

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Metadata } from 'grpc';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const metadata = context.getArgByIndex(1) as Metadata;
      const authheader = metadata.get('Authorization')[0].toString();
      if (!authheader.startsWith('Bearer ')) {
        return false;
      } else {
        const idToken = authheader.slice(7);
        const decodedIdToken = await admin.auth().verifyIdToken(idToken);
        metadata.add('user', JSON.stringify(decodedIdToken));
        return true;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
