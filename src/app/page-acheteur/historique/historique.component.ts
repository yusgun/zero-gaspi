import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  elementsC: any[] = [
    {commande:"Commande n°1"},
    {commande:"Commande n°2"},
    {commande:"Commande n°3"},
    {commande:"Commande n°4"},
    {commande:"Commande n°5"},
    {commande:"Commande n°6"},
    {commande:"Commande n°7"},
    {commande:"Commande n°8"},
    {commande:"Commande n°9"},
    {commande:"Commande n°10"},
  ];

  // Ajout du module HttpClient pour les requêtes vers API ou serveur
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
