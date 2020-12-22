import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRuimComponent } from './show-ruim.component';

describe('ShowRuimComponent', () => {
  let component: ShowRuimComponent;
  let fixture: ComponentFixture<ShowRuimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRuimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRuimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
