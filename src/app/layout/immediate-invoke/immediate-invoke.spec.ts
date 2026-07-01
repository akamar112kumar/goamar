import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmediateInvoke } from './immediate-invoke';

describe('ImmediateInvoke', () => {
  let component: ImmediateInvoke;
  let fixture: ComponentFixture<ImmediateInvoke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmediateInvoke]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmediateInvoke);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
