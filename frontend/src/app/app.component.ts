import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './common/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  loggedIn: Observable<boolean>;
  requiresLogin: Observable<boolean>;
  shouldShowContent: Observable<boolean>;
  destroyingSubject = new BehaviorSubject(false);
  destroying = this.destroyingSubject.asObservable().pipe(filter(v => v));
  constructor(
    private auth: AngularFireAuth,
    private dialogService: MatDialog,
    private router: Router
  ) {
    this.loggedIn = this.auth.user.pipe(map(u => u !== null));
    this.requiresLogin = this.router.events.pipe(
      filter(e => e instanceof ActivationStart),
      tap(v => console.log(v)),
      map(e => (e as ActivationStart).snapshot.data.requiresLogin === true)
    );
    this.shouldShowContent = combineLatest([
      this.loggedIn,
      this.requiresLogin
    ]).pipe(map(([loggedIn, requiresLogin]) => loggedIn || !requiresLogin));
    combineLatest([this.loggedIn, this.requiresLogin])
      .pipe(
        filter(([loggedIn, requiresLogin]) => !loggedIn && requiresLogin),
        takeUntil(this.destroying)
      )
      .subscribe(() => this.dialogService.open(LoginComponent));
  }

  ngOnDestroy() {
    this.destroyingSubject.next(true);
  }
}
