import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPizzaByTypeComponent } from './get-pizza-by-type.component';

describe('GetPizzaByTypeComponent', () => {
  let component: GetPizzaByTypeComponent;
  let fixture: ComponentFixture<GetPizzaByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPizzaByTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPizzaByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
