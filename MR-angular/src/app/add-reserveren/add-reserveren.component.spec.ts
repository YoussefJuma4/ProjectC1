import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReserverenComponent } from './add-reserveren.component';

describe('AddReserverenComponent', () => {
  let component: AddReserverenComponent;
  let fixture: ComponentFixture<AddReserverenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReserverenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReserverenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
