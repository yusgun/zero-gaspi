import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Lot } from 'src/app/models/lot';

@Component({
  selector: 'app-ajout-lot',
  templateUrl: './ajout-lot.component.html',
  styleUrls: ['./ajout-lot.component.css']
})
export class AjoutLotComponent implements OnInit {

  lot:Lot = {
    nblot: null,
    description: '',
    libelle: '',
    prixlot: 5,
    entreprise_id: null
  }

   baseUrl: string = 'http://localhost:8080/lot';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  create() {
    console.log(this.lot);
    return this.http.post(this.baseUrl, this.lot).subscribe(
      data  => {
        console.log(data);
      }
    )
  }
}
