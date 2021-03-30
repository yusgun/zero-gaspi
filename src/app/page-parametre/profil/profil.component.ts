import { Component, Input, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { AssociationService } from 'src/app/services/association/association.service';
import { ParticulierService } from 'src/app/services/particulier/particulier.service';
import { Identite } from 'src/app/models/identite';
import { Connexion } from 'src/app/models/connexion';
import { Particulier } from 'src/app/models/particulier';
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

  particulier: Particulier = {
    id: 148,
    numeroTelephone: '0621245120',
    rue: 'rue bidule ',
    codePostal: '59200',
    ville: 'troug',
    nom: 'jdd',
    prenom: 'pdgg',
    libelle: 'machin',
    connexion: {
      id: 1,
      mail: 'biell.@ldl.com',
      motDePasse: 'admin12224548Password'
    },
    type_identite: "particulier"
  }

  UpdateForParticulier() {
    this.particulierApi.update(this.particulier.id, this.particulier).subscribe(data => {
      console.log(data)
    },
      error => console.log(error))
  }

  UpdateForAssociation() {
    this.associationApi.update(1, Object).subscribe(data => {
      console.log(data)
    },
      error => console.log(error))
  }

  UpdateForEntreprise() {
    this.entrepriseApi.update(1, Object).subscribe(data => {
      console.log(data)
    },
      error => console.log(error))
  }

}
