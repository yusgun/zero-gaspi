import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/ngbd-modal-content/ngbd-modal-content.component';
import { Entreprise } from '../models/Entreprise';
import { FavorisService } from '../services/favoris/favoris.service';

@Component({
  selector: 'app-listing-favoris',
  templateUrl: './listing-favoris.component.html',
  styleUrls: ['./listing-favoris.component.css']
})
export class ListingFavorisComponent implements OnInit {

  favoris: Entreprise[] = [];

  constructor(private favorisApi: FavorisService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.favorisApi.getByClient(11).subscribe((data: Entreprise[]) => {
      data.forEach(element => {
        this.favoris.push({
          nom: element[0],
          ville: element[1],
          codePostal: element[2],
          numTel: element[3],
          adresse: element[4],
          id: element[5]
        })
      })
    })
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

  supprimerFavori(idEntreprise:number){
    this.favorisApi.deleteByIds(11, idEntreprise).subscribe(null);
  }

}
