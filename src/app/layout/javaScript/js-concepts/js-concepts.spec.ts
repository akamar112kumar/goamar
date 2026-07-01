import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsConcepts } from './js-concepts';

describe('JsConcepts', () => {
  let component: JsConcepts;
  let fixture: ComponentFixture<JsConcepts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsConcepts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsConcepts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
