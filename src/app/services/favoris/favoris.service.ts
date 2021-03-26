import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from 'src/app/models/Entreprise';
import { Favoris } from 'src/app/models/Favoris';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private http:HttpClient) { }

  create(favoris: Favoris) {
    this.http.post('http://localhost:8080/favoris', favoris);
  }
}
