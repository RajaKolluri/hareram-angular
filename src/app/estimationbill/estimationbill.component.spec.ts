import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationbillComponent } from './estimationbill.component';

describe('EstimationbillComponent', () => {
  let component: EstimationbillComponent;
  let fixture: ComponentFixture<EstimationbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
