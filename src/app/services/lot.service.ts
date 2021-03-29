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
  create(lot: Lot) {
    return this.http.post(baseUrl, lot);
  }

  delete(id:number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
