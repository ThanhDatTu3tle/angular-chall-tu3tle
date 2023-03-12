import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../data/authors';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.scss']
})
export class AuthorInfoComponent {
  @Input() author: Author | any;
  @Output() select = new EventEmitter<Author>();

  handleShowInfoOfAuthor = () => {
    this.select.emit(this.author);
    console.log(`${this.select.emit(this.author.id)}`)
  }

  handleDeleteAuthor = () => {
    // this.select.emit(null);
  }

  constructor() {}
}
