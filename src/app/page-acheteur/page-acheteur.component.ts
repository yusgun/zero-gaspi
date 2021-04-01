import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../models/Entreprise';
import { Favoris } from '../models/Favoris';
import { entrepriseMapping, EntrepriseService } from '../services/entreprise/entreprise.service';
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

  favoris: Entreprise[] = [];

  constructor(private entrepriseApi: EntrepriseService, private mapApi: MapService, private favorisApi: FavorisService) { }

  ngOnInit(): void {
    this.mapApi.getLocation();
    this.getFavoris();
  }

  getSearch(): void {
    this.entreprises = this.entrepriseApi.getEntrepriseBySearch(this.search);
    this.entreprises.forEach(entreprise => {
      this.mapApi.addInMap(entreprise);
    })
  }

  getFavoris(): void {
    this.favorisApi.favObservable.subscribe((data: Entreprise[]) => {
      this.favoris = data;
    });
    this.favorisApi.getByClient(11);
  }


}
