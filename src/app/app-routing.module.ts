import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ContaUsuarioComponent } from './pages/conta-usuario/conta-usuario.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaProdutosComponent } from './pages/lista-produtos/lista-produtos.component';
import { PaginaCadastroComponent } from './pages/pagina-cadastro/pagina-cadastro.component';
import { PaginaEsqueciSenhaComponent } from './pages/pagina-esqueci-senha/pagina-esqueci-senha.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { PaginaProdutoComponent } from './pages/pagina-produto/pagina-produto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista-produtos', component: ListaProdutosComponent },
  { path: 'pagina-produto/:id', component: PaginaProdutoComponent },
  { path: 'conta-usuario', component: ContaUsuarioComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'login', component: PaginaLoginComponent },
  { path: 'esqueci-senha', component: PaginaEsqueciSenhaComponent },
  { path: 'cadastro', component: PaginaCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
