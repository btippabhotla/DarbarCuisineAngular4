import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegetarianItemsComponent } from './non-vegetarian-items.component';

describe('NonVegetarianItemsComponent', () => {
  let component: NonVegetarianItemsComponent;
  let fixture: ComponentFixture<NonVegetarianItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonVegetarianItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVegetarianItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
