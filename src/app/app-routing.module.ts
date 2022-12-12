import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { ContaUsuarioComponent } from './pages/conta-usuario/conta-usuario.component';
import { ListaProdutosComponent } from './pages/lista-produtos/lista-produtos.component';
import { PaginaProdutoComponent } from './pages/pagina-produto/pagina-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista-produtos', component: ListaProdutosComponent },
  { path: 'pagina-produto/:id', component: PaginaProdutoComponent },
  { path: 'conta-usuario', component: ContaUsuarioComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'carrinho', component: CarrinhoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
