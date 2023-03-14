import { Component } from '@angular/core';
import { authors } from '../data/authors';

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.scss']
})
export class AuthorsTableComponent {
  displayedColumns: string[] = [
    'id', 
    'firstName', 
    'lastName', 
    'fullName', 
    'email', 
    'gender', 
    'ipAddress',
  ];
  authors = authors;
}
