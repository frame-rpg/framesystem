import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CommonModule } from '@angular/common';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { NgModule } from '@angular/core';
import { SETTINGS } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: SETTINGS,
      useValue: environment.production
        ? undefined
        : {
            host: 'localhost:8080',
            ssl: false
          }
    },
    {
      provide: FIREBASE_OPTIONS,
      useValue: environment.production
        ? {
            databaseURL: 'https://framesystem-v2.firebaseio.com',
            apiKey: environment.firebaseApiKey,
            authDomain: 'framesystem-v2.firebaseapp.com',
            projectId: 'framesystem-v2',
            storageBucket: 'framesystem-v2.appspot.com',
            messagingSenderId: '416504723616',
            appId: '1:416504723616:web:0c298ee9c4ca1102b631c5'
          }
        : {
            databaseURL: 'https://framesystem-v2.firebaseio.com',
            apiKey: environment.firebaseApiKey,
            authDomain: 'framesystem-v2.firebaseapp.com',
            projectId: 'framesystem-v2',
            storageBucket: 'framesystem-v2.appspot.com',
            messagingSenderId: '416504723616',
            appId: '1:416504723616:web:0c298ee9c4ca1102b631c5'
          }
    }
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: environment.firebaseApiKey,
      authDomain: 'framesystem-v2.firebaseapp.com',
      databaseURL: 'https://framesystem-v2-default-rtdb.firebaseio.com',
      projectId: 'framesystem-v2',
      storageBucket: 'framesystem-v2.appspot.com',
      messagingSenderId: '416504723616',
      appId: '1:416504723616:web:0c298ee9c4ca1102b631c5'
    }),
    AngularFireStorageModule,
    CommonModule
  ]
})
export class FirebaseModule {}
