import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReserverenComponent } from './show-reserveren.component';

describe('ShowReserverenComponent', () => {
  let component: ShowReserverenComponent;
  let fixture: ComponentFixture<ShowReserverenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReserverenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReserverenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
