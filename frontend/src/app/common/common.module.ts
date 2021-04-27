import { CommonModule } from '@angular/common';
import { FirebaseUIModule } from 'firebaseui-angular';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToplineComponent } from './topline/topline.component';

@NgModule({
  declarations: [ToplineComponent, LoginComponent],
  exports: [ToplineComponent, LoginComponent],
  imports: [
    CommonModule,
    FirebaseUIModule.forFeature({}),
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class FramesystemCommonModule {}
