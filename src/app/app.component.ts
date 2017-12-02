import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public option={
    position:["bottom","right"],
    timeOut:3000,
    lastOnBottom:true
  }
}
