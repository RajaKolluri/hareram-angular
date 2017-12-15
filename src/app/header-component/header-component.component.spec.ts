import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMyComponentComponent } from './new-my-component.component';

describe('NewMyComponentComponent', () => {
  let component: NewMyComponentComponent;
  let fixture: ComponentFixture<NewMyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
