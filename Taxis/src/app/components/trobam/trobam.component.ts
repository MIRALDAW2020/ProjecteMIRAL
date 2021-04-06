import { Component, OnInit } from '@angular/core';
import {AgmCoreModule} from '@agm/core';

@Component({
  selector: 'app-trobam',
  templateUrl: './trobam.component.html',
  styleUrls: ['./trobam.component.css']
})
export class TrobamComponent implements OnInit {
  // lat : Number =40;
  lat :number;
  lng :number;
  zoom:number;
  mapTypeId: string;
  constructor() {

    // latitud del mapa
    this.lat =40.6123,
     // // longitud
    this.lng =40.6123,
      // // zoomb  del mapa 
    this.zoom=10;
    // // tipo de vista de mapa 
    this.mapTypeId="hybrid";

  }
  getCurrentPosition(){
    
    navigator.geolocation.getCurrentPosition(position =>{

      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom=14;
    })

    
    // navigator.geolocation.watchPosition;

  }

// asda
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position =>{
      
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      

    })
  }


  






}
