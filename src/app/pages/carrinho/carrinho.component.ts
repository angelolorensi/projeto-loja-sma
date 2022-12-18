import { Component, OnInit } from '@angular/core';
import { Camiseta } from 'src/app/model/Camiseta';
import { CamisetasService } from 'src/app/service/camisetas/camisetas.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  camisetas: Camiseta[] = [];

  constructor(private camisetaService: CamisetasService) {}

  ngOnInit(): void {
    this.camisetas = this.camisetaService.buscarTodos();
  }
}
