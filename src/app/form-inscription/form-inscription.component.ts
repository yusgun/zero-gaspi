import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {

  userProfilForm: FormGroup;
  fbGroup: any = {};

  user: any = "";
  users = [
    { type: "", libele: "--" },
    { type: "association", libele: "une association" },
    { type: "particulier", libele: "un particulier" },
    { type: "professionnel", libele: "un professionnel" }
  ];

  constructor(private fb: FormBuilder) {
    this.fbGroup = {
      nomAssociation: [""],
      rna: [""],
      nom: [""],
      prenom: [""],
      nomEntreprise: [""],
      siret: [""],
      adresse: ["", Validators.required],
      cp: ["", [Validators.required, Validators.pattern("^(([01-95]{2}|2A|2B)[0-9]{3})$|^[971-974]$")]],
      ville: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]],
      mdp: ["", [Validators.required, Validators.minLength(8)]],
      confirmMdp: ["", Validators.required]
    }
    this.userProfilForm = this.fb.group(this.fbGroup);
  }

  ngOnInit(): void {
  }

  onChange(value): void {
    this.user = value;
  }

  onSubmit() {
    if (this.userProfilForm.valid) {
      console.log(this.userProfilForm.value);
    } else {
      console.log("erreur");
    }
  }

}
