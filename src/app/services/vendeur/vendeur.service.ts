import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendeur } from "../vendeur";

@Injectable({
  providedIn: 'root'
})
export class VendeurService {

  constructor(private http: HttpClient) { }
}
