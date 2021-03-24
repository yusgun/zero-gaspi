import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVendeurComponent } from './navbar-vendeur.component';

describe('NavbarVendeurComponent', () => {
  let component: NavbarVendeurComponent;
  let fixture: ComponentFixture<NavbarVendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarVendeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
