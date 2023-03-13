import { Component } from '@angular/core';
import { users } from '../data/users';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  data = users;

  constructor() {}
  ngOnInit() {}
}
