import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechcrunchPage } from './techcrunch.page';

describe('TechcrunchPage', () => {
  let component: TechcrunchPage;
  let fixture: ComponentFixture<TechcrunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechcrunchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechcrunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
