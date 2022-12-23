import { ProdutosService } from '../../service/produtos/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private ProdutoService: ProdutosService) {}

  ngOnInit(): void {
    this.produtos = this.ProdutoService.buscarTodos();
  }
}
