import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { AssociationService } from 'src/app/services/association/association.service';
import { ParticulierService } from 'src/app/services/particulier/particulier.service';

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
    if(window.confirm('Etes vous certain de vouloir supprimer votre compte ?'))
    this.entrepriseApi.delete(122).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }

  DeleteAccountForAssociation() {
    if(window.confirm('Etes vous certain de vouloir supprimer votre compte ?'))
    this.associationApi.delete(122).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }
  
  DeleteAccountForParticulier() {
    if(window.confirm('Etes vous certain de vouloir supprimer votre compte ?'))
    this.particulierApi.delete(152).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }
}

