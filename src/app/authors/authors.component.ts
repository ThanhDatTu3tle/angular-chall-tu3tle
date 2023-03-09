import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    {
      id: 3,
      firstName: 'Dat',
      lastName: 'Nguyen',
      email: 'thanhdat83badinh@gmail.com',
      gender: 'Male',
      ipAddress: '058.77.64.127',
    },
    {
      id: 4,
      firstName: 'Tu3tle',
      lastName: 'Nguyen',
      email: 'thanhdat11badinh@gmail.com',
      gender: 'Male',
      ipAddress: '058.77.64.127',
    },
  ];
}
