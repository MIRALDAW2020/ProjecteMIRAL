import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const api = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  reservaTaxi(reserva: any){
    return this.http.post(`${api}server/insertarReserva.php`, JSON.stringify(reserva));
  }
  
}
