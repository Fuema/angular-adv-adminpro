import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: [
  ]
})
export class ObservablesComponent implements OnInit, OnDestroy {

  // Para cancelar la subscripcion implemento el onDestroy
  // Para cancelar la subscripcion implemento el onDestroy
  public intervalSubs!: Subscription;

  constructor() {
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {

    // this.intervalManual();

    /* this.intervalAuto()
      .subscribe(
      (valor) => console.log(valor)
    ); */

    // Esto es igual a la funcion de arriba (cuando un argumento -valor- es envido directamente a una funcion)
    this.intervalSubs = this.intervalAuto().subscribe(console.log);
  }

  // using functio predefinida Inteval. Take cantidad de observaciones a retornar
  // El orden de los operadores es importante. Map transforma salida del observer
  // Filter only par values 10 veces (el take no se dispara con los impares)
  intervalAuto(): Observable<number> {
    return interval(500)
          .pipe(
          map(valor => valor + 1),
          filter(valor => (valor % 2 === 0) ? true : false),
          take(10),  // coment for test unsubscribe
         );
  }

  intervalManual() {
    let i = -1;
    const obs$ = new Observable<number>( observer => {
    //  let i = -1;
    const intervalo = setInterval( () => {
    i++;
    observer.next(i);
    if (i === 4) {
        clearInterval( intervalo );
        observer.complete();
      }
    if ( i === 2) {
      // i = 0;
        observer.error('i llego a 2');
      }
    }, 1000 );
  });

    obs$.pipe(
     retry(2)
    ).subscribe(
    valor => console.log('Subs:', valor),
    error => console.warn('Error:', error),
    () => console.info('Obs terminado'),
  );
  }

}
