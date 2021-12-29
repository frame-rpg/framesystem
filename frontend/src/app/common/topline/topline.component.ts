import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from '../login.component';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fs-topline',
  templateUrl: './topline.component.html',
  styleUrls: ['./topline.component.scss']
})
export class ToplineComponent implements OnInit {
  loggedIn: Observable<boolean>;

  constructor(private auth: AngularFireAuth, private dialogService: MatDialog) {
    this.loggedIn = this.auth.user.pipe(map(u => u !== null));
  }

  ngOnInit(): void {}

  async logout() {}

  async login() {
    this.dialogService.open(LoginComponent);
  }
}
