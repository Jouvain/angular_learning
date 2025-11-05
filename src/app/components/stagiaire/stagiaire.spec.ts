import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stagiaire } from './stagiaire';

describe('Stagiaire', () => {
  let component: Stagiaire;
  let fixture: ComponentFixture<Stagiaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stagiaire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stagiaire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
