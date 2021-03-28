import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from 'src/app/models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  status;
  errorMessage;

  constructor(private http: HttpClient) { }


  delete() {
    this.http.delete('http://localhost:3306/entreprise/{id}')
      .subscribe({
        next: data => {
          this.status = 'Delete successful';
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      });
  }
}
