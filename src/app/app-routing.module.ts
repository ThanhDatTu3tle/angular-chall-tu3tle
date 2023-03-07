import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileCardComponent } from './profile-card/profile-card.component';

const routes: Routes = [
  // { path: 'profile-card-component', component: ProfileCardComponent },
  // { path: 'second-component', component: SecondComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
