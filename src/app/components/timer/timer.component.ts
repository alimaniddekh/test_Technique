import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  timer: any;
  elapsedTime = 100;

  ngOnInit() {
    // Set up timer to increment elapsedTime every second
    this.timer = setInterval(() => {
      this.elapsedTime--;
    }, 1000);
  }

  ngOnDestroy() {
    // Clear timer when component is destroyed
    clearInterval(this.timer);
  }
}
