import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lot } from 'src/app/models/lot';
import { LotService } from 'src/app/services/lot.service';

@Component({
  selector: 'app-update-lot',
  templateUrl: './update-lot.component.html',
  styleUrls: ['./update-lot.component.css']
})
export class UpdateLotComponent implements OnInit {

  lot: Lot = {
    nblot: null,
    description: '',
    libelle: '',
    prixlot: 5,
    entreprise: null
  }


  constructor(private lotApi: LotService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.lotApi.getLotById(params.id).subscribe(lot=>{
        this.lot = lot;
      })
    })
  }

  modifLot(lot : Lot) {
    this.lotApi.update(lot.id,lot).subscribe(data =>{
       console.log(data)
       this.router.navigateByUrl('modif-lot')
      }, 
       error => console.log(error));
      }

}
