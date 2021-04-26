import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [LoginModule],
  imports: [CommonModule]
})
export class PagesModule {}
