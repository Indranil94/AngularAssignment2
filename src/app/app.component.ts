import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string;
  checkStatus: boolean;
  constructor(){
    this.username='';
    this.checkStatus=true;
  }

  onInput(event: Event){
    let val=(<HTMLInputElement>event.target).value;
    if(val===''){
      this.checkStatus = true;
    }
    else{
      this.checkStatus = false;
    }
  }

  onReset(){
    this.username = '';
    this.checkStatus = true
  }
}
