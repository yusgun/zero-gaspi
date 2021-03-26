import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IdentiteService {

  readonly route: string = environment.baseUrl;

  constructor(private http: HttpClient) { }
}
