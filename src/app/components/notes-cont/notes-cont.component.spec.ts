import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesContComponent } from './notes-cont.component';

describe('NotesContComponent', () => {
  let component: NotesContComponent;
  let fixture: ComponentFixture<NotesContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
