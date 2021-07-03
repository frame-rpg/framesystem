import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GRPC_INTERCEPTORS, GrpcCoreModule } from '@ngx-grpc/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseModule } from './config/firebase.module';
import { FramesystemCommonModule } from './common/common.module';
import { GrpcAuthInterceptor } from './grpc-auth.interceptor';
import { ImprobableEngGrpcWebClientModule } from '@ngx-grpc/improbable-eng-grpc-web-client';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
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
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    RouterModule,
    FirebaseModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    BrowserAnimationsModule,
    FramesystemCommonModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: GRPC_INTERCEPTORS,
      useClass: GrpcAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
