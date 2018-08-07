import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempLibComponentComponent } from './temp-lib-component.component';

describe('TempLibComponentComponent', () => {
  let component: TempLibComponentComponent;
  let fixture: ComponentFixture<TempLibComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempLibComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempLibComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
