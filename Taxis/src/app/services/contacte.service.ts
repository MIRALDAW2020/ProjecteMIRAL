import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Missatge } from '../models/contacte.models';

const api = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ContacteService {

  constructor(private http: HttpClient) {}

  enviarMissatge(missatge: any){
    return this.http.post(`${api}server/contacte.php`, JSON.stringify(missatge));
  }

}
