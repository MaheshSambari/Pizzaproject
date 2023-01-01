import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpizzaDescComponent } from './getpizza-desc.component';

describe('GetpizzaDescComponent', () => {
  let component: GetpizzaDescComponent;
  let fixture: ComponentFixture<GetpizzaDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpizzaDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpizzaDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
