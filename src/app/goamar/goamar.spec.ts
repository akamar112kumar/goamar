import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goamar } from './goamar';

describe('Goamar', () => {
  let component: Goamar;
  let fixture: ComponentFixture<Goamar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Goamar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goamar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
