import { Component } from '@angular/core';
import { authors, Author } from '../data/authors';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {

  displayedColumns: string[] = [
    'id', 
    'firstName', 
    'lastName', 
    'fullName', 
    'email', 
    'gender', 
    'ipAddress',
    'select',
    'delete'
  ];
  authors = authors;
  selectedAuthor = authors[0];

  onSelected(selectedAuthor: Author) {
    this.selectedAuthor = selectedAuthor;
  }

  onDeleted(id: number, count: number) {
    this.authors = this.authors.filter(author => {
      return author.id !== id;
    })

    if (this.selectedAuthor.id === id) {
      this.selectedAuthor = this.authors[0];
      count++
    }
  } 

  constructor() {}

}
