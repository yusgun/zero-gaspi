import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-content',
  templateUrl: './ngbd-modal-content.component.html',
  styleUrls: ['./ngbd-modal-content.component.css']
})
export class NgbdModalContent implements OnInit {
  @Input() titre : string;
  @Input() body : string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit():void{

  }
}
