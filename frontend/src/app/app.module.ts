import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseModule } from './config/firebase.module';
import { GrpcCoreModule } from '@ngx-grpc/core';
import { ImprobableEngGrpcWebClientModule } from '@ngx-grpc/improbable-eng-grpc-web-client';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { grpc } from '@improbable-eng/grpc-web';

const firebaseUiAuthConfig: any = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: true,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    }
  ],
  tosUrl: 'https://framesystem.org/assets/static/tos.html',
  privacyPolicyUrl: 'https://framesystem.org/assets/static/privacy_policy.html',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GrpcCoreModule.forRoot(),
    ImprobableEngGrpcWebClientModule.forRoot({
      settings: {
        host: 'http://localhost:8080',
        transport: grpc.CrossBrowserHttpTransport({})
      }
    }),
    AppRoutingModule,
    PagesModule,
    FirebaseModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
