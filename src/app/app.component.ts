import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-chall-tu3tle';

  public user = {
    name: 'Tu3tle',
    age: 22,
  }
}
