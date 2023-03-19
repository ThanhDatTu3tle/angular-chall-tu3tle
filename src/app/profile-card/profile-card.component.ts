import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @ViewChild('toggleComp', { static: true }) toggleComponent: ToggleComponent | any;
  @ViewChildren(ToggleComponent) toggleComponents: QueryList<ToggleComponent> | any;

  data = {
    name: 'Dat Nguyen',
    title: 'Internship at TMA Solutions',
    image: 'https://i.imgur.com/RRSjEd4.jpg',
    university: 'HUFLIT University',
    href: 'https://www.facebook.com/dattu3tle/',
    mediaLinks: {
      dribbble: '#',
      instagram: '#',
      linkedin: '#',
      facebook: 'https://www.facebook.com/dattu3tle/',
    }
  }

  handleClick() {
    alert('Thank you for contact me!!!')
  }

  checked = false;

  ngOnInit() {
    this.toggleComponents.changes.subscribe(console.log)
  }

  ngAfterViewInit() {
    this.toggleComponents.changes.subscribe(console.log)
  }
}



