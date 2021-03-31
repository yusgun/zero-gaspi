import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Association } from 'src/app/models/association';
import { Connexion } from 'src/app/models/connexion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  private baseUrl ='http://localhost:8080/association';

  association: Association = {
    id: 11,
    type_commande: "don",
    numeroTelephone: "0606060606",
    rue: "7 rue des villas",
    codePostal: "59000",
    nom: "Nom",
    prenom: "Prenom",
    connexion: 1,
    perimetre: 0,
    libelle: "rien",
    numero: "100000000" // numero RNA
  };

  constructor(private http: HttpClient) { }

  getAssociation(){
    return this.association;
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(association: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, association);
  }
  
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${id}`, value);
  }

  updatePassword(id: number, value: any): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${id}`, value);
  }

}
    
