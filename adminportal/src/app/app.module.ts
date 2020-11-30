import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { CarsComponent } from './components/cars/cars.component';
import { AugmentsComponent } from './components/augments/augments.component';
import { AccountInformationComponent } from './components/account-information/account-information.component';
import { PlayerErrorLogsComponent } from './components/player-error-logs/player-error-logs.component';
import { ReceiptsComponent } from './components/receipts/receipts.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    CarsComponent,
    AugmentsComponent,
    AccountInformationComponent,
    PlayerErrorLogsComponent,
    ReceiptsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
