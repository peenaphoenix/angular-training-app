import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-first-app';
  hide = false;
  constructor(){
    setTimeout(()=>{
      this.title = "changed the title";
      setTimeout(()=>{
        this.hide = true;
        console.log("hiding initialised")
        setTimeout(()=>{
          this.hide = false;
          console.log("showing initialised")
        },2000)
      },3000)
    },1000)
  }
}
