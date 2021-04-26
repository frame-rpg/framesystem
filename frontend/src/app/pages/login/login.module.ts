import { CommonModule } from '@angular/common';
import { FirebaseUIModule } from 'firebaseui-angular';
import { LoginComponent } from './login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, FirebaseUIModule.forFeature({}), MatSnackBarModule]
})
export class LoginModule {}
