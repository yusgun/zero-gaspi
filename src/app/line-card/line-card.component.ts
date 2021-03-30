import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAchatComponent } from '../modal/modal-achat/modal-achat.component';
import { NgbdModalContent } from '../modal/ngbd-modal-content/ngbd-modal-content.component';
import { Entreprise } from '../models/Entreprise';
import { Favoris } from '../models/Favoris';
import { FavorisService } from '../services/favoris/favoris.service';
import { Lot } from '../models/lot';
import { LotService } from '../services/lot.service';

@Component({
  selector: 'app-line-card',
  templateUrl: './line-card.component.html',
  styleUrls: ['./line-card.component.css']
})
export class LineCardComponent implements OnInit {

  search: string = "";

  @Input() entreprise: Entreprise;

  constructor(private modalService: NgbModal, private http:HttpClient, private favorisService:FavorisService) {
  }

  ngOnInit(): void {
  }

  open(): void {
    const modalRef = this.modalService.open(ModalAchatComponent);
    modalRef.componentInstance.titre = this.entreprise.nom;
    modalRef.componentInstance.entreprise = this.entreprise;
  }

  ajouterFavoris(entreprise: Entreprise){
    let favoris: Favoris = {
      association: {
        id: 11
      },
      entreprise: entreprise
    }
    favoris = this.favorisService.create(favoris);
  }

  informationEntreprise(entreprise: Entreprise){
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.body = `
    <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Type d'information</th>
        <th scope="col">Information</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Nom de l'établissement</th>
        <td>${entreprise.nom}</td>
      </tr>
      <tr>
        <th scope="row">Adresse</th>
        <td>${entreprise.adresse} ${entreprise.codePostal} ${entreprise.ville}</td>
      </tr>
      <tr>
        <th scope="row">Téléphone</th>
        <td>${entreprise.numTel}</td>
      </tr>
    </tbody>
    </table>
    `;
    modalRef.componentInstance.titre = "Informations concernant " + this.entreprise.nom;
  }

}