import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from '../../models/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  entreprise: Entreprise = {
    nom: "Michel Antony",
    ville: "Lomme",
    codePostal: "59160",
    numTel: "0303030303",
    adresse: "892 Avenue de Dunkerque, 59160 Lille",
    id: 12
  }

  constructor(private http: HttpClient) { }

  getEntrepriseBySearch(search: string): Entreprise[] {
    let entreprises: Entreprise[] = [];
    if (search !== undefined && search !== '') {
      this.http.get('http://localhost:8080/entreprise/findby/' + search).subscribe((data: any[]) => {
        let tmp: any[] = [];
        tmp = data;
        tmp.forEach(element => {
          entreprises.push(entrepriseMapping(element));
        })
      });
    }
    return entreprises;
  }
}

export const entrepriseMapping = (element: any[]): Entreprise =>{
  return {
    nom: element[0],
    ville: element[1],
    codePostal: element[2],
    numTel: element[3],
    adresse: element[4],
    id: element[5]
  }
}
