import { Usuario } from './../../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'http://localhost:8080/api/'

  constructor(private httpClient: HttpClient) { }

  buscarUsuarioPorId() {
    
  }

  salvarUsuario(usuario:Usuario) {
    return this.httpClient.post<Usuario>(this.API + 'usuario/', usuario)
  }
}
