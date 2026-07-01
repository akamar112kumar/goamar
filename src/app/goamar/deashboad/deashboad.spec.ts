import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deashboad } from './deashboad';

describe('Deashboad', () => {
  let component: Deashboad;
  let fixture: ComponentFixture<Deashboad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deashboad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deashboad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
