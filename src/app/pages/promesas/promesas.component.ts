import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });

/*     const promesa = new Promise( ( resolve, reject ) => {
        if ( false ) {
          resolve('Promesa AScepted.');
        } else {
          reject('Promesa rejected.');
        }
    });
    // async
    promesa.then( (mensaje) => {
      console.log(mensaje);
    } )
    .catch( error => console.log('Promesa Fail.', error));
    console.log('fin init'); */
  }

  // Promesaas as a function. Acceding Public Generic API (reqres.in)
  getUsuarios() {

    return new Promise ( resolve => {
      fetch('https:/reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => resolve(body.data));
    });
  }
}
