import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGetPizzaordersComponent } from './c-get-pizzaorders.component';

describe('CGetPizzaordersComponent', () => {
  let component: CGetPizzaordersComponent;
  let fixture: ComponentFixture<CGetPizzaordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CGetPizzaordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CGetPizzaordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
