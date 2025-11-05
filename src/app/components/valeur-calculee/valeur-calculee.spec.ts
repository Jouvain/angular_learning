import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValeurCalculee } from './valeur-calculee';

describe('ValeurCalculee', () => {
  let component: ValeurCalculee;
  let fixture: ComponentFixture<ValeurCalculee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValeurCalculee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValeurCalculee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
