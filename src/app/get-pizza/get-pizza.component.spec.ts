import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPizzaComponent } from './get-pizza.component';

describe('GetPizzaComponent', () => {
  let component: GetPizzaComponent;
  let fixture: ComponentFixture<GetPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
