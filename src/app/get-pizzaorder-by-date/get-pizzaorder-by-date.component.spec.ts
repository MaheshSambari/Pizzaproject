import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPizzaorderByDateComponent } from './get-pizzaorder-by-date.component';

describe('GetPizzaorderByDateComponent', () => {
  let component: GetPizzaorderByDateComponent;
  let fixture: ComponentFixture<GetPizzaorderByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPizzaorderByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPizzaorderByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
