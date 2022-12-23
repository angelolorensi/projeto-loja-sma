import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/service/produtos/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/Produto';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css'],
})
export class PaginaProdutoComponent implements OnInit {
  produto!: Produto;

  constructor(
    private ProdutosService: ProdutosService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.produto = ProdutosService.buscarProdutoPorId(params['id']);
      }
    });
  }

  ngOnInit(): void {}
}
