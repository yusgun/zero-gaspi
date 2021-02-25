import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-page-acheteur',
  templateUrl: './page-acheteur.component.html',
  styleUrls: ['./page-acheteur.component.css']
})
export class PageAcheteurComponent implements OnInit {

  // Ajout du module HttpClient pour les requêtes vers API ou serveur
  constructor(private http: HttpClient) { }

  /**
   * Permet d'avoir les données de localisation (latitude, longitude) pour une adresse donnée par l'utilisateur à l'inscription
   */
  getLocation(){
    let adresse = "Place des Buisses 59000 Lille";
    let url = "https://us1.locationiq.com/v1/search.php?key=pk.80e954ba843d7c3bda0e5222ae0b3223&format=json&q=" + adresse.split(' ').join('%20'); // Requete avec l'API locationIQ pour récupérer les coordonnées géographiques
    this.http.get(url).subscribe((data: any) => { // Récupère la latitude et la longitude
      let latitude: number = data[0].lat;
      let longitude: number = data[0].lon;
      this.initMap(latitude, longitude); // Lancement de la map
    });
  }

  /**
   * Initialialise la carte sur le site
   * @param latitude de l'adresse de l'utilisateur
   * @param longitude de l'adresse de l'utilisateur
   */
  initMap(latitude: number, longitude: number){
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    let zoom = 12;
    const map = L.map('map').setView([latitude, longitude], zoom);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map'
    }).addTo(map);
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
      data.records.forEach(podotactile => {
        L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], { icon: myIcon }).bindPopup(`<p>Titre</p> <span>Latitude: ${podotactile.geometry.coordinates[1]}</span><br><span>Longitude: ${podotactile.geometry.coordinates[0]}</span>`).addTo(map);
      });
    });
  }

  ngOnInit(): void {
    this.getLocation();
  }

}
