import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmNewPassword: new FormControl(null, [Validators.required])
    }, {
      validator: this.MustMatch('newPassword', 'confirmNewPassword')
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

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
