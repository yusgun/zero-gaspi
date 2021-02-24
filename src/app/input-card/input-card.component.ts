import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-card',
  template: `<div class="form-group row">
    <label for="{{ id }}" class="col-sm-3 col-form-label">{{ libele }}</label>
    <div class="col-sm-9">
      <input type="{{ type }}" class="form-control form-control-sm" id="{{ id }}" placeholder="{{ placeholder ? placeholder : '' }}" required>
    </div>
    </div>`,
  styleUrls: ['./input-card.component.css']
})
export class InputCardComponent implements OnInit {

  @Input() libele: string;
  @Input() id: string;
  @Input() type: string = "text"; // input de type texte par défaut si rien n'est enseigné
  @Input() placeholder?: string; // paramètre optionel

  constructor() { }

  ngOnInit(): void {
  }
}
