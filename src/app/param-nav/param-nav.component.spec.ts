import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamNavComponent } from './param-nav.component';

describe('ParamNavComponent', () => {
  let component: ParamNavComponent;
  let fixture: ComponentFixture<ParamNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
