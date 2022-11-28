import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compag2Component } from './compag2.component';

describe('Compag2Component', () => {
  let component: Compag2Component;
  let fixture: ComponentFixture<Compag2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compag2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compag2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
