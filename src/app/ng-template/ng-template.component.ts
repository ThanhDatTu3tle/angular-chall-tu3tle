import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent {
  counter = 1;
  
  navs = ['Active', 'Link', 'About'];

  tu3tleNav = ['Home', 'About', 'Contact'];

  user = {
    name: 'Tu3tle',
    age: 22,
  }

  handleIncrease() {
    this.user.age++;
  }

  handleDecrease() {
    this.user.age--;
  }
}
