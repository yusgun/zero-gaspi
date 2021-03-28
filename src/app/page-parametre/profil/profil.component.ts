import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { AssociationService } from 'src/app/services/association/association.service';
import { ParticulierService } from 'src/app/services/particulier/particulier.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private entrepriseApi: EntrepriseService, private associationApi: AssociationService, private particulierApi: ParticulierService) { }

  ngOnInit(): void {
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
