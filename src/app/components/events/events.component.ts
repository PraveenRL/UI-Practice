import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  countClicks: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addClick() {

  }

  removeClick() {

  }

}
