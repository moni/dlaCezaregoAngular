import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesMultiSelectDropdownComponent } from './sources-multi-select-dropdown.component';

describe('SourcesMultiSelectDropdownComponent', () => {
  let component: SourcesMultiSelectDropdownComponent;
  let fixture: ComponentFixture<SourcesMultiSelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesMultiSelectDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesMultiSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
