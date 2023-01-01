import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPizzaByidComponent } from './get-pizza-byid.component';

describe('GetPizzaByidComponent', () => {
  let component: GetPizzaByidComponent;
  let fixture: ComponentFixture<GetPizzaByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPizzaByidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPizzaByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
