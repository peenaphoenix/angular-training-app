import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isBold = false;
  isTraining = false;
  currentStyles:{};
  addName = '';
  names:any[];
  color: string = ''

  constructor() {
    this.currentStyles = {
      'background':  this.isBold ? 'yellow' : 'none'
    };
    this.names = ["pranav","murali"];
    this.color = 'red';
   }

  ngOnInit() {
  }

  makeBold(){
    this.isBold = !this.isBold;
  }

  enableTraining(){
    this.isTraining = !this.isTraining;
  }
  add(){
    this.names.push(this.addName)
    this.addName= '';
  }

}
