import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from '../../models/Entreprise';
import { Observable, Subject } from 'rxjs';
import { MapService } from '../map/map.service';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private entSubject = new Subject<any>();

  entObservable = this.entSubject.asObservable();

  entreprise: Entreprise = {
    nom: "Michel Antony",
    ville: "Lomme",
    codePostal: "59160",
    numTel: "0303030303",
    adresse: "892 Avenue de Dunkerque, 59160 Lille",
    id: 12
  }

  constructor(private http: HttpClient, private mapService: MapService) { }

  getEntrepriseBySearch(search: string): Entreprise[] {
    let entreprises: Entreprise[] = [];
    if (search !== undefined && search !== '') {
      this.http.get('http://localhost:8080/entreprise/findby/' + search).subscribe((data: any[]) => {
        let tmp: any[] = [];
        tmp = data;
        tmp.forEach(element => {
          entreprises.push(entrepriseMapping(element));
        })
        this.entSubject.next(entreprises);
      });
    }
    return entreprises;
  }

  private baseUrl = 'http://localhost:8080/entreprise';

  get(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(entreprise: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, entreprise);
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
export const entrepriseMapping = (element: any[]) => {
  return {
    nom: element[0],
    ville: element[1],
    codePostal: element[2],
    numTel: element[3],
    adresse: element[4],
    id: element[5],
    latitude: 50.645762,
    longitude: 2.986056
  };
}
