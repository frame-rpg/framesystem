import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SelfComponent } from './pages/profile/self/self.component';

const routes: Routes = [
  {
    path: 'me',
    component: SelfComponent,
    data: {
      requiresLogin: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
