import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/ngbd-modal-content/ngbd-modal-content.component';

@Component({
  selector: 'app-line-card',
  templateUrl: './line-card.component.html',
  styleUrls: ['./line-card.component.css']
})
export class LineCardComponent implements OnInit {

  idClient: number = 11;

  @Output() favoriEvent = new EventEmitter<String>();

  search: string = "";

  @Input() element: any;

  constructor(private modalService: NgbModal, private http:HttpClient) {
  }

  ngOnInit(): void {
  }

  open(): void {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.body = "Test";
    modalRef.componentInstance.titre = this.element;
  }

  addToFavori():void{
    this.favoriEvent.emit(this.element);
  }

}