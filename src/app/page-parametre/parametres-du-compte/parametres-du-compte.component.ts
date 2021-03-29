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

  associationRepository() {
    this.associationApi.delete
  }
  
  particulierRepository() {
    this.particulierApi.delete(132).subscribe(data =>
      console.log(data),
      error => console.log(error));
  }

  entrepriseRepository() {
    this.entrepriseApi.delete(25).subscribe(data =>
      console.log(data),
      error => console.log(error));
  }

}
