import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit  {

  ngOnInit() {
    this.btnColor = `btn ${this.btnColor}`;
  }

  @Input('MyValueIn') progreso: number = 50;
  @Input() btnColor: string = 'btn-primary';

  @Output('MyValueOut') ValueOutput: EventEmitter<number> = new EventEmitter();

  cambiarValor( valor: number) {

    if (this.progreso >= 100 && valor >= 0){
      this.ValueOutput.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0){
      this.ValueOutput.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    return this.ValueOutput.emit(this.progreso);
  }

  onChange(valor: number ) {

    if (valor >= 100){
        this.progreso = 100;
      } else if (valor <= 0) {
        this.progreso = 0;
      } else {
        this.progreso = valor;
      }
    this.ValueOutput.emit(this.progreso);
  }

}
