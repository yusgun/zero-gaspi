import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Entreprise } from 'src/app/models/Entreprise';

import { Favoris } from 'src/app/models/Favoris';
import { entrepriseMapping } from '../entreprise/entreprise.service';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  private favSubject = new Subject<any>();

  favObservable = this.favSubject.asObservable();

  constructor(private http: HttpClient) { }

  create(favoris: Favoris) {
    this.http.post<any[]>('http://localhost:8080/favoris', favoris, { observe: 'response' }).subscribe((resp) => {
      this.getByClient(11);
    }, (err) => {
      console.error(err);
    });
  }

  deleteByIds(idClient: number, idEntreprise: number) {
    this.http.delete("http://localhost:8080/favoris/client/" + idClient + "/entreprise/" + idEntreprise, { observe: 'response' }).subscribe((resp) => {
      this.getByClient(11);
    }, (err) => {
      console.error(err);
    });
  }

  getByClient(client: number) {
    this.http.get<any[]>("http://localhost:8080/favoris/findby/client/" + client).subscribe((fav: any[]) => {
      let tab : Entreprise[] = [];
      if(fav){
        fav.forEach(element => {
          tab.push(entrepriseMapping(element));
        })
      }
      this.favSubject.next(tab);
    })
  }
}
