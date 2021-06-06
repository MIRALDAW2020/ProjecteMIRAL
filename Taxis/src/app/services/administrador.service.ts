import { VerUsuarios } from './../models/verUsuarios';
import { json } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs/internal/Observable';


const api = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  id!: number;

  constructor(private http: HttpClient) { }

  loginAdministrador(json: any){
    return this.http.post(`${api}server/loginAdministrador.php`, JSON.stringify(json));
  }

  verUsuariosService(sesion: any):Observable <any>{
    
    return this.http.post(`${api}server/verUsuariosAdmin.php`, JSON.stringify(sesion));
  }

  verReservasService(sesion:any):Observable <any>{

    return this.http.post(`${api}server/verTodasReservasTaxi.php`, JSON.stringify(sesion));
  }
  


}