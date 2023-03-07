import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
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

  handleClick = () => {
    alert('Thank you for contact me!!!')
  }
}
