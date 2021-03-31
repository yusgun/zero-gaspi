import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightSpanKind } from 'typescript';
import { NgbdModalContent } from '../modal/ngbd-modal-content/ngbd-modal-content.component';
import { Entreprise } from '../models/Entreprise';
import { FavorisService } from '../services/favoris/favoris.service';

@Component({
  selector: 'app-listing-favoris',
  templateUrl: './listing-favoris.component.html',
  styleUrls: ['./listing-favoris.component.css']
})
export class ListingFavorisComponent implements OnInit {

  @Input() favoris: any[] = [];

  constructor(private favorisApi: FavorisService, private modalService: NgbModal) {

  }

  ngOnInit(): void {
  }

  informationEntreprise(entreprise: Entreprise) {
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
    modalRef.componentInstance.titre = "Informations concernant " + entreprise.nom;
  }

  supprimerFavori(idEntreprise: number) {
    this.favorisApi.deleteByIds(11, idEntreprise);
  }

}
