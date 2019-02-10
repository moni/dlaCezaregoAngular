import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayNewsComponent } from './today-news.component';

describe('TodayNewsComponent', () => {
  let component: TodayNewsComponent;
  let fixture: ComponentFixture<TodayNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
