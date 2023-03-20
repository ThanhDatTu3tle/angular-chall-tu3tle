import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() content?: string;

  @Input() canSkip?: boolean;
  @Output() skip = new EventEmitter<boolean>();
}
