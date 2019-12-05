import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() receiveName : string;    //Input decorator

  @Output() sendName = new EventEmitter<string>();

  outname(){
    this.sendName.emit('Hai How are you?'); 
  }

  local(txt : string){
    this.sendName.emit(txt);
  }

}
