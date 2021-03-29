import { Component, Input, OnInit } from '@angular/core';
import { Lot } from 'src/app/models/lot';
import { LotService } from 'src/app/services/lot.service';

@Component({
  selector: 'app-modif-lot',
  templateUrl: './modif-lot.component.html',
  styleUrls: ['./modif-lot.component.css']
})
export class ModifLotComponent implements OnInit {

    lots:Lot[] = [{
    nblot: null,
    description: '',
    libelle: '',
    prixlot: 5,
    entreprise_id: null
  }]

   baseUrl: string = 'http://localhost:8080/lot';

  constructor(private lotApi: LotService) { }

  ngOnInit(): void {
    this.lotApi.getLot().subscribe((lots: Lot[])=>{
      console.log(lots)
      this.lots = lots;
    });
  }

  deleteLot(id:number) {
    this.lotApi.delete(id).subscribe(data => {
      this.lotApi.getLot().subscribe((lots: Lot[])=>{
        this.lots = lots;
    })
    });
  }


}
