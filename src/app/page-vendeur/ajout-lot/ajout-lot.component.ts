import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from 'src/app/modal/ngbd-modal-content/ngbd-modal-content.component';
import { Lot } from 'src/app/models/lot';
import { LotService } from 'src/app/services/lot.service';

@Component({
  selector: 'app-ajout-lot',
  templateUrl: './ajout-lot.component.html',
  styleUrls: ['./ajout-lot.component.css']
})
export class AjoutLotComponent implements OnInit {

  statut: string = "";


  lotForm = new FormGroup({
    nblot: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    libelle: new FormControl('', [Validators.required, Validators.minLength(2)]),
    prixlot: new FormControl(''),
    entreprise: new FormGroup({
      id: new FormControl(4)
    })
  })

  baseUrl: string = 'http://localhost:8080/lot';


  constructor(private lotApi: LotService) { }

  ngOnInit(): void {
  }

  create() {
    let i: number = 0;

    for (i = 0; i < this.lotForm.value.nblot; i++) {
      if (this.lotForm.valid) {
        console.log(this.lotForm.value);
        this.lotApi.create(this.lotForm.value).subscribe(resp => console.log(resp))
        error => {
          console.log(error);
        };
      }
    }
    this.statut = "L'ajout de votre lot est effectué."
    this.lotForm.reset();
  }
}


