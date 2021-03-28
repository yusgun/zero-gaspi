import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Association } from 'src/app/models/association';


@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  status;
  errorMessage;

  constructor(private http: HttpClient) { }

  delete() {
    this.http.delete('http://localhost:3306/association/{id}')
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
