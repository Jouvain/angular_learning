import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleVie } from './cycle-vie';

describe('CycleVie', () => {
  let component: CycleVie;
  let fixture: ComponentFixture<CycleVie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CycleVie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycleVie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
