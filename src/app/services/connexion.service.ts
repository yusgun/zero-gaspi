import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { IdentiteService } from './identite.service';
import { Identite } from '../models/identite';
import { Connexion } from '../models/connexion';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  readonly route: string = environment.baseUrl;

  constructor(private http: HttpClient, private identiteApi: IdentiteService) { }
}
