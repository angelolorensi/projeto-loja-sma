import { ProdutosService } from '../../service/produtos/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private ProdutoService: ProdutosService) {}

  ngOnInit(): void {
    this.produtos = this.ProdutoService.buscarMaisVendidos();
  }
}
