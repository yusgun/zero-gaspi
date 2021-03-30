import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Association } from 'src/app/models/association';
import { Connexion } from 'src/app/models/connexion';


@Injectable({
  providedIn: 'root'
})
export class AssociationService {

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

  constructor(private http: HttpClient) { 
  }

  getAssociation(){
    return this.association;
  }
}
