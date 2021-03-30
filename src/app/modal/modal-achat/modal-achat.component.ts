import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Entreprise } from 'src/app/models/Entreprise';
import { Lot } from 'src/app/models/lot';
import { LotService } from 'src/app/services/lot.service';

@Component({
  selector: 'app-modal-achat',
  templateUrl: './modal-achat.component.html',
  styleUrls: ['./modal-achat.component.css']
})
export class ModalAchatComponent implements OnInit {

  @Input() titre = "";
  @Input() entreprise : Entreprise;
  lots : Lot[] = [];
  
  constructor(public activeModal: NgbActiveModal, private lotApi: LotService) { }

  ngOnInit(): void {
    this.lotApi.getLotByEntreprise(this.entreprise.id).subscribe((res: Lot[]) => {
      this.lots = res;
    });
  }

  acheterLot(entreprise: Entreprise){
    
  }
}
