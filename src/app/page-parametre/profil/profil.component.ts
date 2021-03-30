import { Component, Input, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { AssociationService } from 'src/app/services/association/association.service';
import { ParticulierService } from 'src/app/services/particulier/particulier.service';
import { Identite } from 'src/app/models/identite';
import { Connexion } from 'src/app/models/connexion';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  


  constructor(private entrepriseApi: EntrepriseService, private associationApi: AssociationService, private particulierApi: ParticulierService) { }

  ngOnInit(): void {
    console.log();
  }

  UpdateForAssociation() {
    this.associationApi.update(1, Object).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }

  UpdateForParticulier() {
    this.particulierApi.update(1, Object).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }

  UpdateForEntreprise() {
    this.entrepriseApi.update(1, Object).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }

}
