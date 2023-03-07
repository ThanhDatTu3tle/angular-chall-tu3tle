import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  
  @Input()
  name!: string;

  ngOnInit() {
    console.log('Init!')
  }

  ngOnDestroy() {
    console.log('Destroy!')
  }

  handleClick() {
    alert('Hi there!!!')
  }
}
