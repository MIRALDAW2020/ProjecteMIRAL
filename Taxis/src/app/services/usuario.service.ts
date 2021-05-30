import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const api = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  id!: number;

  constructor(private http: HttpClient) { }

  setMemoryUsuario(id: number) {
    this.id = id;
  }

  getMemoryID() {
    return this.id;
  }

  updateUser(usuari: Usuario){
    console.log(usuari);
    return this.http.post(`${api}server/modificarUsuari.php`, JSON.stringify(usuari));
  }

  registrarUsuari(registre: any){
    return this.http.post(`${api}server/registreUsuari.php`, JSON.stringify(registre));
  }

  login(login: any) {
    return this.http.post(`${api}server/login.php`,  JSON.stringify(login));
  }

  reservaTaxi(reserva: any){
    return this.http.post(`${api}server/reserva_taxi.php`, JSON.stringify(reserva));
  }


  // Función para pedir a la BBDD que nos devuelva todos los campos del usuario que le pasamos a través de varSesion

  pedirDatosUsuario(sesion: any):Observable <any>{
    console.log(sesion);
    return this.http.post(`${api}server/mostrarPerfil.php`, JSON.stringify(sesion));
  }


  pedirListaReservasUsuario(sesion: any): Observable <any>{
    console.log(sesion);
    
    return this.http.post(`${api}server/mostrarReservesUsuari.php`, JSON.stringify(sesion));

  }

}
