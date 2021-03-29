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

  identite: Identite = {
    id: 1,
    numeroTelephone: "",
    rue: "",
    codePostal: "",
    ville: "",
    nom: "",
    prenom: "",
    connexion: {
      id: 1,
      mail: '',
      motDePasse: ''
    }
  }


  constructor(private entrepriseApi: EntrepriseService, private associationApi: AssociationService, private particulierApi: ParticulierService) { }

  ngOnInit(): void {
    console.log(this.identite);
  }

  associationRepository() {
    this.associationApi.update
  }

  particulierRepository() {
    this.particulierApi.update
  }

  entrepriseRepository() {
    this.entrepriseApi.update
  }

}
