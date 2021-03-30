import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { AssociationService } from 'src/app/services/association/association.service';
import { ParticulierService } from 'src/app/services/particulier/particulier.service';

@Component({
  selector: 'app-securite',
  templateUrl: './securite.component.html',
  styleUrls: ['./securite.component.css']
})
export class SecuriteComponent implements OnInit {

  userProfile: FormGroup;

  constructor(private entrepriseApi: EntrepriseService, private associationApi: AssociationService, private particulierApi: ParticulierService,
    private fb: FormBuilder) {

    this.userProfile = this.fb.group({
      currentPassword: [''],
      newPassword: [''],
      confirmNewPassword: ['']
    });
   }

  ngOnInit(): void {
  }


  UpdatePasswordForEntreprise() {
    this.entrepriseApi.updatePassword(122, Object).subscribe(data => {
      console.log(data)
    },
      error => console.log(error))
  }

  UpdatePasswordForParticulier() {
    this.particulierApi.updatePassword(122, Object).subscribe(data => {
      console.log(data)
    },
      error => console.log(error))

  }
  UpdatePasswordForAssociation() {
    this.associationApi.updatePassword(122, Object).subscribe(data => {
      console.log(data)
    },
      error => console.log(error))

  }


}
