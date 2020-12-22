import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGebruikersComponent } from './show-gebruikers.component';

describe('ShowGebruikersComponent', () => {
  let component: ShowGebruikersComponent;
  let fixture: ComponentFixture<ShowGebruikersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGebruikersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGebruikersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
