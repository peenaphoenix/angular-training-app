import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.sass']
})
export class CliComponent implements OnInit {

  @Output() loadComplete = new EventEmitter<boolean>()

  constructor() { 
  
  }

  ngOnInit() {
    this.loadComplete.emit(true);
  }

}
