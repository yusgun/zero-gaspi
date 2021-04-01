import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { AssociationService } from 'src/app/services/association/association.service';
import { ParticulierService } from 'src/app/services/particulier/particulier.service';
import { Particulier } from 'src/app/models/particulier';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-parametres-du-compte',
  templateUrl: './parametres-du-compte.component.html',
  styleUrls: ['./parametres-du-compte.component.css']
})
export class ParametresDuCompteComponent implements OnInit {


  constructor(private entrepriseApi: EntrepriseService, private associationApi: AssociationService, private particulierApi: ParticulierService, private connexionApi: ConnexionService) { }

  ngOnInit(): void {
    
  }
  getParticulierById() {
    this.particulierApi.get

  }

  DeleteAccountForEntreprise() {
    if(window.confirm('Etes vous certain de vouloir supprimer votre compte ?'))
    this.entrepriseApi.delete(this.particulier.id).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }

  DeleteAccountForAssociation() {
    if(window.confirm('Etes vous certain de vouloir supprimer votre compte ?'))
    this.associationApi.delete(57).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }
  
  DeleteAccountForParticulier() {
    if(window.confirm('Etes vous certain de vouloir supprimer votre compte ?'))
    this.particulierApi.delete(148).subscribe(data =>{
      console.log(data)},
      error => console.log(error))
  }

  particulier: Particulier = {
    id: 14555,
    numeroTelephone: '0621245120',
    rue: 'rue de lille ',
    codePostal: '59000',
    ville: 'Lille',
    nom: 'Dupont',
    prenom: 'Axel',
    libelle: 'machin',
    connexion: {
      id: 1,
      mail: 'bilel.@outlook.com',
      motDePasse: 'admin12224548Password'
    },
    type_identite: "particulier"
  }
}

