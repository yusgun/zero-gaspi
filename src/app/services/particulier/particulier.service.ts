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

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
  update(id: number, value: any): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${id}`, value);
  }

}
