import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lot } from '../models/lot';

const baseUrl = 'http://localhost:8080/lot';

@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor(private http: HttpClient) { }

  getLot() {
    return this.http.get(baseUrl);
  }

  getLotById(id:number) {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }
  create(lot: Lot) {
    return this.http.post(baseUrl, lot);
  }

  delete(id:number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  update(id: number, lot:Lot) {
    return this.http.put(`${baseUrl}/${id}`, lot);
  }

  getLotByEntreprise(id : number): Observable<Lot[]>{
    return this.http.get<Lot[]>(baseUrl + "/entreprise/" + id);
  }

}
