import { Router } from '@angular/router';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  Optional,
  ViewChild
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseuiAngularLibraryComponent } from 'firebaseui-angular';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'fs-user-login',
  template: '<firebase-ui #login></firebase-ui>',
  styles: []
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  @ViewChild('login') login?: FirebaseuiAngularLibraryComponent;
  destroyingSubject = new BehaviorSubject<boolean>(false);
  destroying = this.destroyingSubject.asObservable().pipe(filter(v => v));

  constructor(
    public auth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router,
    @Optional() public matDialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngAfterViewInit() {
    this.login!.signInSuccessWithAuthResultCallback.pipe(
      takeUntil(this.destroying)
    ).subscribe(async () => {
      if (this.matDialogRef) {
        this.matDialogRef.close();
      }
      this.snackBar.open('Successfully logged in.');
      this.router.navigate(['me']);
    });
    this.login!.signInFailureCallback.pipe(
      takeUntil(this.destroying)
    ).subscribe(async result => {
      this.snackBar.open('Login error.');
    });
  }

  ngOnDestroy() {
    this.destroyingSubject.next(true);
  }

  logout() {
    this.auth.signOut();
  }

  async verify() {
    (await this.auth.currentUser)?.sendEmailVerification();
    this.snackBar.open('Email sent.');
  }
}
