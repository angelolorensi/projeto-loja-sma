export class Camiseta{
  id!: number;
  nome!: string;
  tamanho!: string;
  preco!: number;
  descricao?: string;
  favorito: boolean = false;
  urlImagem!: string;
  filtros?: string[];
}
