import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Javalogin } from './javalogin';

describe('Javalogin', () => {
  let component: Javalogin;
  let fixture: ComponentFixture<Javalogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Javalogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Javalogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
