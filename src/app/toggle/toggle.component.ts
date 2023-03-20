import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() header?: string;
  @Input() question?: string;
  @Input() content?: string;

  @Input() checked: boolean = false;
  @Output() checkedChanged = new EventEmitter<boolean>();

  handleToggle() {
    this.checked = !this.checked;
    this.checkedChanged.emit(this.checked);
  }
}
