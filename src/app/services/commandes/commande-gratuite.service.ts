import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandeGratuite } from 'src/app/models/CommandeGratuite';

@Injectable({
  providedIn: 'root'
})
export class CommandeGratuiteService {

  baseUrl: string = "http://localhost:8080/commandegratuite";

  constructor(private http:HttpClient) { }

  create(commande: CommandeGratuite){
    return this.http.post(this.baseUrl, commande);
  }
}
