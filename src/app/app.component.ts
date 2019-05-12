import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Board With A Bag';
  menu = [
    {"name":"home", "url":"/"},
    {"name":"resume", "url":"/resume"},
    {"name":"blog", "url":"/blog"}
  ];
}
