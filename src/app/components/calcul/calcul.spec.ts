import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calcul } from './calcul';

describe('Calcul', () => {
  let component: Calcul;
  let fixture: ComponentFixture<Calcul>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calcul]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calcul);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
