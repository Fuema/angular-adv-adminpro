import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
  { titulo: 'Dashboard',
    icono: 'mdi mdi-gauge',
    submenu: [
        {titulo: 'Main', url: '/'},
        {titulo: 'Progressbar', url: 'progress'},
        {titulo: 'Graficas', url: 'graph1'},
        {titulo: 'Promise', url: 'promesas'},
        {titulo: 'Observable', url: 'observables'},
      ]
    }
  ];
  constructor() { }
}
