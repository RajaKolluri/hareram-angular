import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSheetComponent } from './price-sheet.component';

describe('PriceSheetComponent', () => {
  let component: PriceSheetComponent;
  let fixture: ComponentFixture<PriceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
