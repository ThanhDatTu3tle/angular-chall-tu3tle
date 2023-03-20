import { Component } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-bootstrap-group',
  templateUrl: './tab-bootstrap-group.component.html',
  styleUrls: ['./tab-bootstrap-group.component.scss'],
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBootstrapGroupComponent,
    }
  ]
})
export class TabBootstrapGroupComponent extends TabGroupComponent {

}
