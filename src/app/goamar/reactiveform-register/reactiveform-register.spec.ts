import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformRegister } from './reactiveform-register';

describe('ReactiveformRegister', () => {
  let component: ReactiveformRegister;
  let fixture: ComponentFixture<ReactiveformRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveformRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
