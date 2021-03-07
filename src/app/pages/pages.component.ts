import { Component, OnInit } from '@angular/core';

import { SettingsService } from './../services/settings.service';

// Para iniciar todos los plug-in cuando se incia el menu (al Login)
// in assets/js/custopm.js
// declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settinsService: SettingsService) { }

  ngOnInit(): void {
    // customInitFunctions();
  }

}
