import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Particulier } from 'src/app/models/particulier';

@Injectable({
  providedIn: 'root'
})
export class ParticulierService {
  status;
  errorMessage;

  constructor(private http: HttpClient) { }

  delete() {
    this.http.delete('http://localhost:3306/particulier/{id}')
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
