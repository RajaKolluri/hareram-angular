import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header-component.component';
import { MenuComponent } from './menu-header/menu.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { BodyComponent } from './body-component/body-component.component';
import { PriceSheetComponent } from './price-sheet/price-sheet.component';
import { EstimationbillComponent } from './estimationbill/estimationbill.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
