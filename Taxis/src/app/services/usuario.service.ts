import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const api = environment.url;
// const vsesion =  environment.varsesion;
// import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) { }

  registrarUsuari(registre: any){
    return this.http.post(`${api}server/registreUsuari.php`, JSON.stringify(registre));
  }

  login(login: any) {
    return this.http.post(`${api}server/login.php`,  JSON.stringify(login));
  }


  // Función para pedir a la BBDD que nos devuelva todos los campos del usuario que le pasamos a través de varSesion

    pedirDatosUsuario(sesion: any):Observable <any>{
      console.log(sesion);
    return this.http.post(`${api}server/mostrarPerfil.php`, JSON.stringify(sesion));
   }


}
