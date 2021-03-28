import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from 'src/app/models/entreprise';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private baseUrl = 'http://localhost:3306/entreprise';

  constructor(private http: HttpClient) { }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}
