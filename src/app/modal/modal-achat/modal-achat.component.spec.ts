import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAchatComponent } from './modal-achat.component';

describe('ModalAchatComponent', () => {
  let component: ModalAchatComponent;
  let fixture: ComponentFixture<ModalAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
