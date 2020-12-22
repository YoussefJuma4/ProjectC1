import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuimteComponent } from './ruimte.component';

describe('RuimteComponent', () => {
  let component: RuimteComponent;
  let fixture: ComponentFixture<RuimteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuimteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuimteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
