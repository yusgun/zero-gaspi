import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommandeGratuite } from 'src/app/models/CommandeGratuite';
import { Entreprise } from 'src/app/models/Entreprise';
import { Lot } from 'src/app/models/lot';
import { AssociationService } from 'src/app/services/association/association.service';
import { CommandeGratuiteService } from 'src/app/services/commandes/commande-gratuite.service';
import { LotService } from 'src/app/services/lot.service';
import { HighlightSpanKind } from 'typescript';

@Component({
  selector: 'app-modal-achat',
  templateUrl: './modal-achat.component.html',
  styleUrls: ['./modal-achat.component.css']
})
export class ModalAchatComponent implements OnInit {

  @Input() titre = "";
  @Input() entreprise : Entreprise;
  lots : Lot[] = [];
  
  constructor(public activeModal: NgbActiveModal, private lotApi: LotService, private associationApi: AssociationService, private cgApi: CommandeGratuiteService, private router: Router) { }

  ngOnInit(): void {
    this.lotApi.getLotByEntreprise(this.entreprise.id).subscribe((res: Lot[]) => {
      this.lots = res;
    });
  }

  acheterLot(lot: Lot){
    let commande : CommandeGratuite = {
      datePaiement: new Date(),
      dateEnvoie: null,
      dateArrivee: null,
      association: this.associationApi.getAssociation(),
      lot: lot
    }
    this.cgApi.create(commande).subscribe((response: Response) => {
      this.router.navigateByUrl('/acheteur/historique'); // redirection vers l'historique de commande
    });
  }
}
