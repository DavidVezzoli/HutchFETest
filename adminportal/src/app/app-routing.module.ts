import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountInformationComponent } from './components/account-information/account-information.component';
import { ReceiptsComponent } from './components/receipts/receipts.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { CarsComponent } from './components/cars/cars.component';
import { AugmentsComponent } from './components/augments/augments.component';
import { PlayerErrorLogsComponent } from './components/player-error-logs/player-error-logs.component';

const routes: Routes = [
  { path: 'user/account-information', component: AccountInformationComponent },
  { path: 'user/player-error-logs', component: PlayerErrorLogsComponent },
  { path: 'user/receipts', component: ReceiptsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'augments', component: AugmentsComponent },
  { path: '', redirectTo: 'user/account-information', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
