import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlogenComponent } from './inlogen.component';

describe('InlogenComponent', () => {
  let component: InlogenComponent;
  let fixture: ComponentFixture<InlogenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlogenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
