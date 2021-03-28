import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parametres-du-compte',
  templateUrl: './parametres-du-compte.component.html',
  styleUrls: ['./parametres-du-compte.component.css']
})
export class ParametresDuCompteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  deleteAccount() {
    
  }

  associationRepository() {

  }
  
  particulierRepository() {

  }

  entrepriseRepository() {

  }


}
