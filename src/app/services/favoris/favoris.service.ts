import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Favoris } from 'src/app/models/Favoris';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private http:HttpClient) { }

  create(favoris: Favoris) {
    let result: any;
    this.http.post('http://localhost:8080/favoris', favoris).subscribe((data)=>{
      result = data;
    });
    return result;
  }

  deleteByIds(idClient:number, idEntreprise: number){
    return this.http.delete("http://localhost:8080/favoris/client/"+idClient+"/entreprise/"+idEntreprise);
  }

  getByClient(client:number){
    // return Observable qui contient la reponse du serveur (ici une entreprise)
    return this.http.get("http://localhost:8080/favoris/findby/client/"+client);
  }
}
