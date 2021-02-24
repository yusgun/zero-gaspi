import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAcheteurComponent } from './page-acheteur.component';

describe('PageAcheteurComponent', () => {
  let component: PageAcheteurComponent;
  let fixture: ComponentFixture<PageAcheteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAcheteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
