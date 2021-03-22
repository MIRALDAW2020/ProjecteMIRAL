import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const api = environment.url;
// import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  registrarUsuari(registre: any){
    return this.http.post(`${api}server/registreUsuari.php`, JSON.stringify(registre));
  }

}
