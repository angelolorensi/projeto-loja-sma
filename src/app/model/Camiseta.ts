export class Camiseta{
  id!: number;
  nome!: string;
  tamanho!: string;
  preco!: number;
  cor?: string;
  descricao?: string;
  favorito: boolean = false;
  urlImagem!: string;
  urlImagemZoom?: string;
  urlImagemBack?: string;
  filtros?: string[];
}
