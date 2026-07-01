import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptLogic } from './javascript-logic';

describe('JavascriptLogic', () => {
  let component: JavascriptLogic;
  let fixture: ComponentFixture<JavascriptLogic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptLogic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptLogic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
