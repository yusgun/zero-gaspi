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

  create(lot: Lot) {
    return this.http.post(baseUrl, lot);
  }

}
