import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  posts = [
    {
      "title":"Welcome to A Board With A Bag",
      "date":"May 12, 2019",
      "content":"I've left this website unused for quite some time.  Maybe it's time to start making use of it again."
    }
  ];
}
