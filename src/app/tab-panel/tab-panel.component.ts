import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent {
  @Input() title?: string;
  @ViewChild(TemplateRef, { static: true}) panelBody: TemplateRef<unknown> | any

  constructor(private tabGroup: TabGroupComponent) {}

  ngOnInit() {
    this.tabGroup.addTab(this);
  }
}
