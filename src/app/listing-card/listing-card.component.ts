import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.css']
})
export class ListingCardComponent implements OnInit {

  constructor() { }

  @Input() titre: string = "";

  @Input() commande: string = "";

  @Input() elements: any[] = [];

  @Input() elementsC: any[] = [];

  ngOnInit(): void {

  }

}
