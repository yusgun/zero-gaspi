import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators,  } from '@angular/forms';
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
      newPassword: new FormControl(null, [ Validators.required]),
      confirmNewPassword: new FormControl(null, [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  UpdatePasswordForParticulier() {
    this.particulierApi.updatePassword(148, this.userProfile.value.confirmNewPassword).subscribe(data => {
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

  UpdatePasswordForEntreprise() {
    this.entrepriseApi.updatePassword(1, String).subscribe(data => {
      console.log(data)
    },
      error => console.log(error))
  }

 
  Comparaison() {
  let newPassword: string = this.userProfile.get('newPassword').value
  let confirmNewPassword: string = this.userProfile.get('confirmNewPassword').value
  if (newPassword !== confirmNewPassword) {
    this.userProfile.get('confirmNewPassword').setErrors({ NoPassswordMatch: true });
  }
}
}
