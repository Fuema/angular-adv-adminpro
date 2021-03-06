import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { IncrementComponent } from './increment/increment.component';
import { DonuthgraphComponent } from './donuthgraph/donuthgraph.component';

@NgModule({
  declarations: [
    IncrementComponent,
    DonuthgraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncrementComponent,
    DonuthgraphComponent
  ]
})
export class ComponentsModule { }
