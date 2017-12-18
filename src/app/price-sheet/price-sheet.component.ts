import { Component, OnInit } from '@angular/core';

import { PriceSheetService } from './price-sheet.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-price-sheet',
  templateUrl: './price-sheet.component.html',
  styleUrls: ['./price-sheet.component.css']
})
export class PriceSheetComponent implements OnInit {

  searchText = '';
  displayItem = '';

  constructor(private pricesheetService: PriceSheetService) { }

  ngOnInit() { }

  getPriceSheet() {
    if (this.searchText.length >= 3) {
      this.displayItem = this.searchText;
      this.pricesheetService.getAnimals('cat', 'texas');
    }
  }
}
