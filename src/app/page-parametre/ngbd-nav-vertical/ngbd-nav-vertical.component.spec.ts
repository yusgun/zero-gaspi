import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdNavVerticalComponent } from './ngbd-nav-vertical.component';

describe('NgbdNavVerticalComponent', () => {
  let component: NgbdNavVerticalComponent;
  let fixture: ComponentFixture<NgbdNavVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdNavVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdNavVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
