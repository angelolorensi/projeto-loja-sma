import { Injectable } from '@angular/core';
import { Camiseta } from 'src/app/shared/model/Camiseta';

@Injectable({
  providedIn: 'root',
})
export class CamisetasService {
  constructor() {}

  buscarTodos(): Camiseta[] {
    return [
      {
        id: 1,
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
        id: 1,
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
        id: 1,
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
        id: 1,
        nome: 'Insert Coins',
        tamanho: 'G',
        preco: 50,
        descricao:
          'Camiseta Insert Coins fabricada 100% em algodao, cor preta , com o logo em caixa alta.',
        favorito: false,
        urlImagem: '/assets/img/camisetas/camiseta-insert-coins.svg',
        filtros: ['G', 'preto'],
      },
    ];
  }

  buscarMaisVendidos(): Camiseta[] {
    return [
      {
        id: 1,
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
}
