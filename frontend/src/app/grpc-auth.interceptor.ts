import { GrpcEvent, GrpcMessage, GrpcRequest } from '@ngx-grpc/common';
import { GrpcHandler, GrpcInterceptor } from '@ngx-grpc/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class GrpcAuthInterceptor implements GrpcInterceptor {
  constructor(private auth: AngularFireAuth) {}

  intercept<Q extends GrpcMessage, S extends GrpcMessage>(
    request: GrpcRequest<Q, S>,
    next: GrpcHandler
  ): Observable<GrpcEvent<S>> {
    return this.auth.idToken.pipe(
      mergeMap((token: string | null) => {
        if (token) {
          request.requestMetadata.set('Authorization', `Bearer ${token}`);
        }
        return next.handle(request);
      })
    );
  }
}
