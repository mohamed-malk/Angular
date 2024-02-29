import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  imageSlider = [
    '/assets/images/img_1.jpg',
    '/assets/images/img_2.jpg',
    '/assets/images/img_3.jpg',
  ];
  c = 0;
  interval: number = -1;
  imageSrc = this.imageSlider[this.c];
  changeSrc(i: number) {
    this.imageSrc = this.imageSlider[i];
  }
  next() {
    this.changeSrc(++this.c % (this.imageSlider.length - 1));
  }
  back() {
    this.changeSrc(--this.c % (this.imageSlider.length - 1));
  }

  play() {
    this.interval = setInterval(
      () => this.changeSrc(++this.c % (this.imageSlider.length - 1)),
      100
    );
  }
  stop() {
    clearInterval(this.interval);
  }
}
