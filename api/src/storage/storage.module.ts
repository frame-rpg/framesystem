import { FirestoreService } from './firestore/firestore.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [FirestoreService],
  exports: [FirestoreService],
})
export class StorageModule {}
