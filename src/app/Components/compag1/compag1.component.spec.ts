import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compag1Component } from './compag1.component';

describe('Compag1Component', () => {
  let component: Compag1Component;
  let fixture: ComponentFixture<Compag1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compag1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compag1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
