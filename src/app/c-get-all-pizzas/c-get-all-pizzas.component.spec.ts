import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGetAllPizzasComponent } from './c-get-all-pizzas.component';

describe('CGetAllPizzasComponent', () => {
  let component: CGetAllPizzasComponent;
  let fixture: ComponentFixture<CGetAllPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CGetAllPizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CGetAllPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
