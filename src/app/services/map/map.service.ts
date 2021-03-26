import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Entreprise } from 'src/app/models/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLocation(): void {
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
      this.initMap(pos.coords.latitude, pos.coords.longitude, null); // Lancement de la map
    })
  }

  /**
   * Initialialise la carte sur le site
   * @param latitude de l'adresse de l'utilisateur
   * @param longitude de l'adresse de l'utilisateur
   * @param entreprises - coordonnées des entreprises à afficher
   */
  initMap(latitude: number, longitude: number, entreprises: Entreprise[]) {
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
}
