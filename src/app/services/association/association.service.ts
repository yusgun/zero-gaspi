import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Association } from "../association";


@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  constructor(private http: HttpClient) { }
}
