import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingFavorisComponent } from './listing-favoris.component';

describe('ListingFavorisComponent', () => {
  let component: ListingFavorisComponent;
  let fixture: ComponentFixture<ListingFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingFavorisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
