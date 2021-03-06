import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  // Grafica1
  public title1: string = 'Title Graph 1';
  public labels1: string[] = ['Label-01', 'Label-02', 'Label-03'];
  public data1: number[]  = [350, 450, 100];

  // Grafica1
  public title2: string = 'Title Graph 2';
  public labels2: string[] = ['Label-21', 'Label-22', 'Label-23'];
  public data2: number[]  = [200, 620, 250];

      // Grafica1
  public title3: string = 'Title Graph 3';
  public labels3: string[] = ['Label-31', 'Label-32', 'Label-33'];
  public data3: number[]  = [660, 780, 550];

  // Grafica1
  public title4: string = 'Title Graph 4';
  public labels4: string[] = ['Label-41', 'Label-42', 'Label-43'];
  public data4: number[]  = [150, 230, 700];

}
