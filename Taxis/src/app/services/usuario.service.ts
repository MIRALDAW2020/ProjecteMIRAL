import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

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
    return this.http.post(`${api}server/modificarAlumno.php`, JSON.stringify(usuari));
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
