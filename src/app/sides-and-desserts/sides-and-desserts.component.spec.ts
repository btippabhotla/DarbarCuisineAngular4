import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesAndDessertsComponent } from './sides-and-desserts.component';

describe('SidesAndDessertsComponent', () => {
  let component: SidesAndDessertsComponent;
  let fixture: ComponentFixture<SidesAndDessertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidesAndDessertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesAndDessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
