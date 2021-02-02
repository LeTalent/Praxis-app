import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientenListComponent } from './patienten-list.component';

describe('PatientenListComponent', () => {
  let component: PatientenListComponent;
  let fixture: ComponentFixture<PatientenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
