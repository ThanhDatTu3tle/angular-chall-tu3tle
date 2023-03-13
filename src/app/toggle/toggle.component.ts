import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input () checked: boolean | undefined = false;
  @Output () checkedChanged: EventEmitter<boolean> = new EventEmitter;

  handleToggle() {
    this.checked = !this.checked;
    this.checkedChanged.emit(this.checked);
  }
}
