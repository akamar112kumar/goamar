import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Days1 } from './days1';

describe('Days1', () => {
  let component: Days1;
  let fixture: ComponentFixture<Days1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Days1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Days1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
