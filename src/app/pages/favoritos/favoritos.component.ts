import { CamisetasService } from './../../service/camisetas/camisetas.service';
import { Component, OnInit } from '@angular/core';
import { Camiseta } from 'src/app/model/Camiseta';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  camisetas: Camiseta[] = [];

  constructor(private camisetaService:CamisetasService) {}

  ngOnInit(): void {
    this.camisetas = this.camisetaService.buscarTodos();
  }
}
