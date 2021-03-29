import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  displayedColumns = ['id', 'type_commande', 'montant','date_paiement'];
  post = [];
  //dataSource:any;
  dataSource: MatTableDataSource<any>;

  // Ajout du module HttpClient pour les requêtes vers API ou serveur
  constructor(private http: HttpClient) {
     this.http.get('http://localhost:4200/acheteur/historique').subscribe(data => {
     this.post.push(data);
     this.dataSource = new MatTableDataSource(this.post[0]);


   }, error => console.error(error));
}

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  //this.paginator._intl.itemsPerPageLabel = 'Enregistrement par page.';
  }
}

export interface PeriodicElement {
  id: number;
  type_commande: string;
  montant: number;
date_paiement: string;
}
