import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header-component.component';
import { MenuComponent } from './menu-header/menu.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { BodyComponent } from './body-component/body-component.component';
import { PriceSheetComponent } from './price-sheet/price-sheet.component';
import { EstimationbillComponent } from './estimationbill/estimationbill.component';

import { PriceSheetService } from './price-sheet/price-sheet.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponentComponent,
    BodyComponent,
    PriceSheetComponent,
    EstimationbillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: 'pricesheet',
        component: PriceSheetComponent
      },
      {
        path: 'estimation',
        component: EstimationbillComponent
      }
    ])
  ],
  providers: [PriceSheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
