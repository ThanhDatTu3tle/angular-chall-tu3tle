import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloComponent } from './hello/hello.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorInfoComponent } from './author-info/author-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProfileCardComponent,
    AuthorsComponent,
    AuthorInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AuthorsComponent]
})
export class AppModule { }
