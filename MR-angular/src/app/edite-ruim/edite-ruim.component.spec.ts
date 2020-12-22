import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeRuimComponent } from './edite-ruim.component';

describe('EditeRuimComponent', () => {
  let component: EditeRuimComponent;
  let fixture: ComponentFixture<EditeRuimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeRuimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeRuimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
