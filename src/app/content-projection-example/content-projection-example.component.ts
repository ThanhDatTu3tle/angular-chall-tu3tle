import { Component } from '@angular/core';

@Component({
  selector: 'app-content-projection-example',
  templateUrl: './content-projection-example.component.html',
  styleUrls: ['./content-projection-example.component.scss']
})
export class ContentProjectionExampleComponent {
  checked: boolean = false;

  questions = {
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  }
}
