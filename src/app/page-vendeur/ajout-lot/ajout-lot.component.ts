import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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
  

  lot: Lot = {
    nblot: null,
    description: '',
    libelle: '',
    prixlot: 5,
    entreprise_id: null
  }

  baseUrl: string = 'http://localhost:8080/lot';

  constructor(private lotApi: LotService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  create() {
    console.log(this.lot);
    
    this.lotApi.create(this.lot).subscribe(resp=>console.log(resp))
    error => {
      console.log(error);
    };
  }
}5

