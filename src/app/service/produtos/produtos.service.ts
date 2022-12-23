import { Injectable } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor() {}

  buscarTodos(): Produto[] {
    return [
      {
        id: 1,
        categoria: 'Camiseta',
        nome: 'Insert Coins',
        tamanho: 'G',
        cor: 'Preta',
        preco: 50,
        descricao:
          'Camiseta Insert Coins fabricada 100% em algodao, cor preta , com o logo em caixa alta.',
        favorito: false,
        urlImagem: '/assets/img/camisetas/camiseta-insert-coins.svg',
        urlImagemZoom:
          '/assets/img/camisetas/camiseta-insert-coins-close-up.png',
        urlImagemBack: '/assets/img/camisetas/camiseta-back-preta.svg',
        filtros: ['G', 'preto'],
      },
      {
        id: 2,
        categoria: 'Camiseta',
        nome: 'Code Red',
        tamanho: 'G',
        cor: 'Preta',
        preco: 50,
        descricao:
          'Camiseta Insert Coins fabricada 100% em algodao, cor preta , com o logo em caixa alta.',
        favorito: false,
        urlImagem: '/assets/img/camisetas/camiseta-code-red.svg',
        urlImagemZoom: '/assets/img/camisetas/camiseta-code-red-close-up.png',
        urlImagemBack: '/assets/img/camisetas/camiseta-back-preta.svg',
        filtros: ['G', 'preto'],
      },
      {
        id: 3,
        categoria: 'Camiseta',
        nome: 'Never Stop',
        tamanho: 'G',
        cor: 'Preta',
        preco: 50,
        descricao:
          'Camiseta Insert Coins fabricada 100% em algodao, cor preta , com o logo em caixa alta.',
        favorito: false,
        urlImagem: '/assets/img/camisetas/camiseta-never-stop.svg',
        urlImagemZoom: '/assets/img/camisetas/camiseta-never-stop-close-up.png',
        urlImagemBack: '/assets/img/camisetas/camiseta-back-preta.svg',
        filtros: ['G', 'preto'],
      },
      {
        id: 4,
        categoria: 'Camiseta',
        nome: 'Insert Coins',
        tamanho: 'G',
        cor: 'Preta',
        preco: 50,
        descricao:
          'Camiseta Insert Coins fabricada 100% em algodao, cor preta , com o logo em caixa alta.',
        favorito: false,
        urlImagem: '/assets/img/camisetas/camiseta-insert-coins.svg',
        urlImagemZoom:
          '/assets/img/camisetas/camiseta-insert-coins-close-up.png',
        urlImagemBack: '/assets/img/camisetas/camiseta-back-preta.svg',
        filtros: ['G', 'preto'],
      },
    ];
  }

  buscarMaisVendidos(): Produto[] {
    return [
      {
        id: 1,
        categoria: 'Camiseta',
        nome: 'Insert Coins',
        tamanho: 'G',
        preco: 50,
        descricao:
          'Camiseta Insert Coins fabricada 100% em algodao, cor preta , com o logo em caixa alta.',
        favorito: false,
        urlImagem: '/assets/img/camisetas/camiseta-insert-coins.svg',
        filtros: ['G', 'preto'],
      },
      {
        id: 2,
        categoria: 'Camiseta',
        nome: 'Code Red',
        tamanho: 'G',
        preco: 50,
        descricao:
          'Camiseta Code Red fabricada 100% em algodao, cor preta , com o logo em caixa alta.',
        favorito: false,
        urlImagem: '/assets/img/camisetas/camiseta-code-red.svg',
        filtros: ['G', 'preto'],
      },
      {
        id: 3,
        categoria: 'Camiseta',
        nome: 'Do More',
        tamanho: 'G',
        preco: 50,
        descricao:
          'Camiseta Do More fabricada 100% em algodao, cor preta , com o logo em caixa alta.',
        favorito: false,
        urlImagem: '/assets/img/camisetas/camiseta-do-more.svg',
        filtros: ['G', 'preto'],
      },
    ];
  }

  buscarProdutoPorId(id: number): Produto {
    return this.buscarTodos().find((camiseta) => camiseta.id == id)!;
  }
}
