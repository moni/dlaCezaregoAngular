import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-news',
  templateUrl: './display-news.component.html',
  styleUrls: ['./display-news.component.scss']
})
export class DisplayNewsComponent implements OnInit {
  @Input() news: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}
