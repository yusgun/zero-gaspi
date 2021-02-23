import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-submit',
  template: `<div class="form-group text-center"><button type="submit" class="btn btn-success">{{ libele }}</button></div>`,
  styleUrls: ['./button-submit.component.css']
})
export class ButtonSubmitComponent implements OnInit {

  @Input() libele?: string = "Envoyer";

  constructor() { }

  ngOnInit(): void {
  }

}
