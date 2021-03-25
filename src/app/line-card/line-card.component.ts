import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-card',
  templateUrl: './line-card.component.html',
  styleUrls: ['./line-card.component.css']
})
export class LineCardComponent implements OnInit {

  @Input() element: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.element);
  }

}
