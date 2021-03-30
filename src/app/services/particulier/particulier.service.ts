import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Particulier } from 'src/app/models/particulier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticulierService {

  private baseUrl = 'http://localhost:8080/particulier';

  constructor(private http: HttpClient) { }

  get(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(particulier: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, particulier);
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
