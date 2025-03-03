import { Component } from '@angular/core';
import { fadeInAnimation } from 'src/assets/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation]
})
export class HomeComponent {

  intro = 'hi, i\'m ethan phan';
  displayed = '';
  index = 0;

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    if (this.index < this.intro.length) {
      this.displayed += this.intro.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), 150);
    }
  }

}
