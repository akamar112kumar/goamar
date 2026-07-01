import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxBanking } from './ngrx-banking';

describe('NgrxBanking', () => {
  let component: NgrxBanking;
  let fixture: ComponentFixture<NgrxBanking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxBanking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxBanking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
