import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../models/Entreprise';
import { FavorisService } from '../services/favoris/favoris.service';

@Component({
  selector: 'app-listing-favoris',
  templateUrl: './listing-favoris.component.html',
  styleUrls: ['./listing-favoris.component.css']
})
export class ListingFavorisComponent implements OnInit {

  favoris: any = [];

  constructor(private favorisApi: FavorisService) { }

  ngOnInit(): void {
    this.favorisApi.getByClient(11).subscribe(data => {console.log(this.favoris = data)});    
  }

}
