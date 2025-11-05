import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trainee } from './trainee';

describe('Trainee', () => {
  let component: Trainee;
  let fixture: ComponentFixture<Trainee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trainee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trainee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
