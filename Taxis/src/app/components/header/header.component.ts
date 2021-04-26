import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  varSesion: any;

  constructor() {
    this.varSesion=environment.varsesion;
  }

  ngOnInit(): void {
  }

}
