import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../models/Entreprise';
import { Favoris } from '../models/Favoris';
import { EntrepriseService } from '../services/entreprise/entreprise.service';
import { FavorisService } from '../services/favoris/favoris.service';
import { MapService } from '../services/map/map.service';

@Component({
  selector: 'app-page-acheteur',
  templateUrl: './page-acheteur.component.html',
  styleUrls: ['./page-acheteur.component.css']
})
export class PageAcheteurComponent implements OnInit {

  search: string = "";

  entreprises: Entreprise[] = [];

  constructor(private entrepriseApi: EntrepriseService, private mapApi: MapService, private favorisApi: FavorisService) { }

  ngOnInit(): void {
    this.mapApi.getLocation();
  }

  getSearch(): void {
    this.entreprises = this.entrepriseApi.getEntrepriseBySearch(this.search);
  }


}
