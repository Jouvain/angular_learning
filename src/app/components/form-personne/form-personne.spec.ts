import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonne } from './form-personne';

describe('FormPersonne', () => {
  let component: FormPersonne;
  let fixture: ComponentFixture<FormPersonne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPersonne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPersonne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
