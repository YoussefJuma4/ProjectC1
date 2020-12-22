import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeGebruikerComponent } from './edite-gebruiker.component';

describe('EditeGebruikerComponent', () => {
  let component: EditeGebruikerComponent;
  let fixture: ComponentFixture<EditeGebruikerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeGebruikerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeGebruikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
