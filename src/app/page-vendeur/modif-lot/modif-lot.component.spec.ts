import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifLotComponent } from './modif-lot.component';

describe('ModifLotComponent', () => {
  let component: ModifLotComponent;
  let fixture: ComponentFixture<ModifLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifLotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
