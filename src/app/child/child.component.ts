import { Component, Input } from '@angular/core';
import { User } from '../data/users';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input () user: User | any;
}
