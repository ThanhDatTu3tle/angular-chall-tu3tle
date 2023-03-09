import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-chall-tu3tle';

  user = {
    name: 'Tu3tle',
    age: 22,
  }
}
