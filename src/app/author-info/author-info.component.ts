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
  @Output() delete = new EventEmitter<number>();

  handleShowInfoOfAuthor = () => {
    this.select.emit(this.author);
  }

  handleDeleteAuthor = () => {
    this.delete.emit(this.author.id);
  }

  constructor() {}
}
