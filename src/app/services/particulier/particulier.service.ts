import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Particulier } from "../particulier";

@Injectable({
  providedIn: 'root'
})
export class ParticulierService {

  constructor(private http: HttpClient) { }
}
