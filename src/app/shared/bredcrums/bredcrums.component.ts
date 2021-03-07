import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-bredcrums',
  templateUrl: './bredcrums.component.html',
  styles: [
  ]
})
export class BredcrumsComponent implements OnDestroy  {

  public titulo!: string;
  public tituloSubs$: Subscription;

  // Destructuring (extraer propiedad )
  // .subscribe(data => {this.titulo = data.titulo; }); por  .subscribe( ({titulo}) => { this.titulo = titulo };
  // lo reemplazo en bredcrums.html
  constructor(private router: Router) {

    this.tituloSubs$ = this.getTituloBreadCrums()
                      .subscribe( ({titulo}) => {
                        this.titulo = titulo;
                        document.title = `AdminPro - ${ titulo }`;
                        });
   }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

   getTituloBreadCrums() {

      return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
        map( (event: ActivationEnd) => event.snapshot.data )
      );
   }







}
