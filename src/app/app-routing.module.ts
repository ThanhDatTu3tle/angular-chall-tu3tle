import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsTableComponent } from './authors-table/authors-table.component';


const routes: Routes = [
  { path: 'app-profile-card', component: ProfileCardComponent },
  { path: 'app-authors', component: AuthorsComponent },
  { path: 'app-authors-table', component: AuthorsTableComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
