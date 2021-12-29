import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  imports: [CommonModule, ProfileModule],
  exports: [ProfileModule]
})
export class PagesModule {}
