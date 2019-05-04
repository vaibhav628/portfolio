import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTickerPage } from './add-ticker.page';

describe('AddTickerPage', () => {
  let component: AddTickerPage;
  let fixture: ComponentFixture<AddTickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
