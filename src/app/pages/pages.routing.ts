import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent, DashboardComponent, Grafica1Component, ProgressComponent,
         AccountSettingsComponent, PromesasComponent, ObservablesComponent } from './index';

const routes: Routes = [

  {path: 'dashboard', component: PagesComponent,
    children: [
      {path: '', component: DashboardComponent, data : {titulo: 'Dashboard'} },
      {path: 'progress', component: ProgressComponent, data : {titulo: 'Progress'} },
      {path: 'graph1', component: Grafica1Component, data : {titulo: 'Grapic'} },
      {path: 'account-settings', component: AccountSettingsComponent, data : {titulo: 'Settings'}},
      {path: 'promesas', component: PromesasComponent, data : {titulo: 'Promesas'}},
      {path: 'observables', component: ObservablesComponent, data : {titulo: 'Observables'} },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

