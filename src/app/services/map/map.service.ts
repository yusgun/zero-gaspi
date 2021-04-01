import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Subject } from 'rxjs';
import { Entreprise } from 'src/app/models/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map !: any;
  private mapSubject = new Subject<any>();

  mapObservable = this.mapSubject.asObservable();

  constructor(private http: HttpClient) { }

  getLocation(): void {
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
      this.initMap(pos.coords.latitude, pos.coords.longitude); // Lancement de la map
    })
  }

  addInMap(entreprise: Entreprise){
    if(this.map != undefined){
      console.log("Suppression de la map");
      this.map.remove();
    }
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    let popup = `<h2>${entreprise.nom}</h2>
    <p>${entreprise.adresse} ${entreprise.codePostal} ${entreprise.ville}<br>${entreprise.numTel}</p>`;
    console.log("update incomming...")
    L.marker([entreprise.latitude, entreprise.longitude], { icon: myIcon }).bindPopup(popup).addTo(L.map('map'));
    this.mapSubject.next(L);
  }

  /**
   * Initialialise la carte sur le site
   * @param latitude de l'adresse de l'utilisateur
   * @param longitude de l'adresse de l'utilisateur
   * @param entreprises - coordonnées des entreprises à afficher
   */
  initMap(latitude: number, longitude: number) {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    let zoom = 12;
    this.map = L.map('map').setView([latitude, longitude], zoom);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map'
    }).addTo(this.map);
  }
}