import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise2june } from './exercise2june';

describe('Exercise2june', () => {
  let component: Exercise2june;
  let fixture: ComponentFixture<Exercise2june>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise2june]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise2june);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
