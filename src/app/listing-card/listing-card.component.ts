import { Component, Input, OnInit } from '@angular/core';
import { Entreprise } from '../models/Entreprise';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.css']
})
export class ListingCardComponent implements OnInit {

  constructor() { }

  @Input() titre: string = "";

  @Input() entreprises: Entreprise[];
  

  ngOnInit(): void {

  }
}
