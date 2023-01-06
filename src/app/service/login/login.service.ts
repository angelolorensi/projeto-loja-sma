import { Usuario } from './../../model/Usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private readonly API = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  loginUsuario(usuario: Usuario){
    return this.httpClient.post(this.API + 'login/', usuario);
  }
}
