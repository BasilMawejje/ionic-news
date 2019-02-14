import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcnewsPage } from './bbcnews.page';

describe('BbcnewsPage', () => {
  let component: BbcnewsPage;
  let fixture: ComponentFixture<BbcnewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbcnewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbcnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
