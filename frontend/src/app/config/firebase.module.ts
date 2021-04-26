import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CommonModule } from '@angular/common';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { NgModule } from '@angular/core';
import { SETTINGS } from '@angular/fire/firestore';
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/auth';
import { USE_EMULATOR as USE_DATABASE_EMULATOR } from '@angular/fire/database';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';
import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/functions';
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
    },
    {
      provide: USE_AUTH_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 9099] : undefined
    },
    {
      provide: USE_DATABASE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 9000] : undefined
    },
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 8081] : undefined
    },
    {
      provide: USE_FUNCTIONS_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 5001] : undefined
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
