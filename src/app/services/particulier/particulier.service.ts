import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Particulier } from 'src/app/models/particulier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticulierService {

  private baseUrl = 'http://localhost:3306/particulier';

  constructor(private http: HttpClient) { }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}
