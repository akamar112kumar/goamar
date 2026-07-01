import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSCode } from './js-code';

describe('JSCode', () => {
  let component: JSCode;
  let fixture: ComponentFixture<JSCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JSCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JSCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
