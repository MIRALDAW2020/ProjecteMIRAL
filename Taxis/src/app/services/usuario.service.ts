import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const api = environment.url;
// import { Usuario } from '../models/usuario.model';

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

  registrarUsuari(registre: any){
    return this.http.post(`${api}server/registreUsuari.php`, JSON.stringify(registre));
  }

  getUsuario(id: number) {
    return this.http.get(`${api}server/seleccionarUsuario.php?id=${id}`);
  }

  login(login: any) {
    return this.http.post(`${api}server/login.php`,  JSON.stringify(login));
  }

}
