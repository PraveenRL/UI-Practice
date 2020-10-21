import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})
export class CustomDirectiveComponent implements OnInit {

  username: string;
  isClicked: boolean;
  constructor() { }

  ngOnInit() {
    this.isClicked = false;
  }

  showDiv(){
    this.isClicked = !this.isClicked;
  }


}
