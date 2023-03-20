import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsTableComponent } from './authors-table/authors-table.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ContentProjectionExampleComponent } from './content-projection-example/content-projection-example.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';


const routes: Routes = [
  { path: 'app-profile-card', component: ProfileCardComponent },
  { path: 'app-authors', component: AuthorsComponent },
  { path: 'app-authors-table', component: AuthorsTableComponent },
  { path: 'app-todo-list', component: TodoListComponent },
  { path: 'app-content-projection-example', component: ContentProjectionExampleComponent },
  { path: 'app-ng-template', component: NgTemplateComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
