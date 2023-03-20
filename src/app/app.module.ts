import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloComponent } from './hello/hello.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ToggleComponent } from './toggle/toggle.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorsTableComponent } from './authors-table/authors-table.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ContentProjectionExampleComponent } from './content-projection-example/content-projection-example.component';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProfileCardComponent,
    AuthorsComponent,
    AuthorInfoComponent,
    ParentComponent,
    ChildComponent,
    ToggleComponent,
    HeaderComponent,
    FooterComponent,
    AuthorsTableComponent,
    TodoListComponent,
    TodoItemComponent,
    ContentProjectionExampleComponent,
    ButtonComponent,
    TabsComponent,
    NgTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    FormsModule, 
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
