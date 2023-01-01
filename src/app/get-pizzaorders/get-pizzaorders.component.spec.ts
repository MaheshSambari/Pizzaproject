import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPizzaordersComponent } from './get-pizzaorders.component';

describe('GetPizzaordersComponent', () => {
  let component: GetPizzaordersComponent;
  let fixture: ComponentFixture<GetPizzaordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPizzaordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPizzaordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
