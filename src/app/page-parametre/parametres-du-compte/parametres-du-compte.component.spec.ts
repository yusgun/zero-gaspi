import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresDuCompteComponent } from './parametres-du-compte.component';

describe('ParametresDuCompteComponent', () => {
  let component: ParametresDuCompteComponent;
  let fixture: ComponentFixture<ParametresDuCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametresDuCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametresDuCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
