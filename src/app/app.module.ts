import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloComponent } from './hello/hello.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProfileCardComponent,
    AuthorsComponent,
    AuthorInfoComponent,
    ParentComponent,
    ChildComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    FormsModule
  ],
  providers: [],
  bootstrap: [ProfileCardComponent]
})
export class AppModule { }
