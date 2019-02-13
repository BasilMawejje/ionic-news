import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheadlinesPage } from './topheadlines.page';

describe('TopheadlinesPage', () => {
  let component: TopheadlinesPage;
  let fixture: ComponentFixture<TopheadlinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopheadlinesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopheadlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
