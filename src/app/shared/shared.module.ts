import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent, SidebarComponent, BredcrumsComponent } from './index';

@NgModule({
  declarations: [
    BredcrumsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  exports: [
    BredcrumsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
