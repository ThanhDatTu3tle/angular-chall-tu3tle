import { Component } from '@angular/core';
import { authors } from '../data/authors';
import { Author } from '../data/authors';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  authors = authors;
  selectedAuthor = authors[0];

  onSelected = (selectedAuthor: Author) => {
    this.selectedAuthor = selectedAuthor;
  }
}
