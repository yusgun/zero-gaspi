import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Entreprise } from '../models/Entreprise';
import { EntrepriseService } from '../services/entreprise/entreprise.service';
import { MapService } from '../services/map/map.service';

@Component({
  selector: 'app-page-acheteur',
  templateUrl: './page-acheteur.component.html',
  styleUrls: ['./page-acheteur.component.css']
})
export class PageAcheteurComponent implements OnInit {

  search: string = "";

  elements: Entreprise[] = [];

  constructor(private http: HttpClient, private entrepriseApi: EntrepriseService, private mapApi: MapService) { }

  ngOnInit(): void {
    this.mapApi.getLocation();
  }

  getSearch(): void {
    this.elements = this.entrepriseApi.getEntrepriseBySearch(this.search);
  }
}
