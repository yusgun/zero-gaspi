import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {

  user: any = "";
  users = [
    {type:"", libele:"--"},
    {type:"association", libele:"une association"},
    {type:"particulier", libele:"un particulier"},
    {type:"professionnel", libele:"un professionnel"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value): void{
    this.user = value;
  }

}
