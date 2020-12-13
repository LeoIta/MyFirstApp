import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers', /*using element*/
  //selector: '[app-servers]', /*using attribute*/
 // selector: '.app-servers', /*using class */
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
