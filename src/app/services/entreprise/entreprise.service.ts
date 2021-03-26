import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from '../../models/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http:HttpClient){}
  
  getEntrepriseBySearch(search: string){
    let entreprises: Entreprise[] = [];
    if(search !== undefined && search !== ''){
      this.http.get('http://localhost:8080/entreprise/findby/'+search).subscribe((data: any[]) => {
        console.log(data);
        let tmp: any[] = [];   
        tmp = data;
        tmp.forEach(element => {
          entreprises.push({
            nom: element[0],
            ville: element[1],
            codePostal: element[2],
            numTel: element[3],
            adresse: element[4],
            id: element[5]
          });
        })
      });
    }
    return entreprises;
  }
}
