import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Author } from '../data/authors';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.scss']
})
export class AuthorInfoComponent implements OnInit, OnChanges {
  @Input() author: Author | any;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();

  handleShowInfoOfAuthor() {
    this.select.emit(this.author);
  }

  handleDeleteAuthor() {
    this.delete.emit(this.author.id);
  }

  constructor() {}

  ngOnInit(): void {
    // console.log(this.author.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.author.id);
  }
}
