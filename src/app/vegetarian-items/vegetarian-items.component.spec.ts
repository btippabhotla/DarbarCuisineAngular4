import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetarianItemsComponent } from './vegetarian-items.component';

describe('VegetarianItemsComponent', () => {
  let component: VegetarianItemsComponent;
  let fixture: ComponentFixture<VegetarianItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetarianItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetarianItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
