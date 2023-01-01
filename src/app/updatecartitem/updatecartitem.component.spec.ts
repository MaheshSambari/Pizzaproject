import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecartitemComponent } from './updatecartitem.component';

describe('UpdatecartitemComponent', () => {
  let component: UpdatecartitemComponent;
  let fixture: ComponentFixture<UpdatecartitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecartitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecartitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
