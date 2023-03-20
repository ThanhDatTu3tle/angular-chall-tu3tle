import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() navs?: string[];
  @Input() tu3tleNav?: string[];
  @Input() linkTemplate?: TemplateRef<any>;
}
