import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionDateComponent } from './completion-date.component';

describe('CompletionDateComponent', () => {
  let component: CompletionDateComponent;
  let fixture: ComponentFixture<CompletionDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
