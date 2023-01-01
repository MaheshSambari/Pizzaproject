import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPizzaOrdersByIdComponent } from './get-pizza-orders-by-id.component';

describe('GetPizzaOrdersByIdComponent', () => {
  let component: GetPizzaOrdersByIdComponent;
  let fixture: ComponentFixture<GetPizzaOrdersByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPizzaOrdersByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPizzaOrdersByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
