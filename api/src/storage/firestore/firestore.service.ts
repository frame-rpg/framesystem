import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import admin from 'firebase-admin';

@Injectable()
export class FirestoreService {
  private db: admin.app.App;

  constructor() {
    this.db = admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: 'https://framesystem-v2-default-rtdb.firebaseio.com',
      projectId: 'framesystem-v2',
    });
  }

  firestore() {
    return this.db.firestore();
  }

  list<T>(path: string): Promise<T[]> {
    return this.firestore()
      .collection(path)
      .get()
      .then((list) => list.docs.map((doc) => doc.data() as T));
  }

  subscribe<T>(path: string): Observable<T> {
    return new Observable((subscriber) => {
      this.firestore()
        .doc(path)
        .onSnapshot(
          (snapshot) => subscriber.next(snapshot.data() as T),
          (err) => subscriber.error(err),
        );
    });
  }
}
