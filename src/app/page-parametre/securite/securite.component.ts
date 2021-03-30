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

//var confirmNewPassword: string = this.userProfile.get('confirmNewPassword').value;
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
    this.entrepriseApi.updatePassword(1, String).subscribe(data => {
      console.log(data)
    },
      error => console.log(error))
  }

  UpdatePasswordForParticulier() {
    this.particulierApi.updatePassword(148, 'confirmNewPassword').subscribe(data => {
      console.log(data)
    },
      error => console.log(error))

  }
  UpdatePasswordForAssociation() {
    this.associationApi.updatePassword(1, String).subscribe(data => {
      console.log(data)
    },
      error => console.log(error))

  }

  onSubmit(): void {
    console.log(this.userProfile.value);
  }

   

    //   table connexion  id: 147  mail : alphonse.denis@email.com  mdp: 0123456  ,   table identite : particulier id 148 

}
