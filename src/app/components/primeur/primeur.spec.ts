import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primeur } from './primeur';

describe('Primeur', () => {
  let component: Primeur;
  let fixture: ComponentFixture<Primeur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Primeur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Primeur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
