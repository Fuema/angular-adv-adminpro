import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donuthgraph',
  templateUrl: './donuthgraph.component.html',
  styles: [
  ]
})
export class DonuthgraphComponent  {

  @Input() title1: string = '';
  @Input() title2: string = '';
  @Input() title3: string = '';
  @Input() title4: string = '';

  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['label1', 'Label2', 'Label3'];

  // @Input('data') doughnutChartData: MultiDataSet = ['data1', 'data2', 'data3'];

  @Input('data') doughnutChartData: number [] = [350, 450, 100];

/*     public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  // [50, 150, 120],
  //   [250, 130, 70],
  ]; */

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ];

}
