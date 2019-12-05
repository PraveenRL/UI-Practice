import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Service';

  name = "Input Decorator";

  outputName  = "Output Decorator";
  receive_Name(value : string ){
    this.outputName = value;
  }

}
