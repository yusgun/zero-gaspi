import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { AssociationService } from 'src/app/services/association/association.service';
import { ParticulierService } from 'src/app/services/particulier/particulier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parametres-du-compte',
  templateUrl: './parametres-du-compte.component.html',
  styleUrls: ['./parametres-du-compte.component.css']
})
export class ParametresDuCompteComponent implements OnInit {

  

  constructor(private entrepriseApi: EntrepriseService, private associationApi: AssociationService, private particulierApi: ParticulierService) { }

  ngOnInit(): void {
    
  }
  getParticulierById() {
    this.particulierApi.get

  }

  DeleteAccountForEntreprise() {
    this.entrepriseApi.delete(122).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }

  DeleteAccountForAssociation() {
    this.associationApi.delete(122).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }
  
  DeleteAccountForParticulier() {
    this.particulierApi.delete(152).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }
}

