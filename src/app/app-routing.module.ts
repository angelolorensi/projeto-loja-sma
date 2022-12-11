import { ListaProdutosComponent } from './pages/lista-produtos/lista-produtos.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista-produtos', component: ListaProdutosComponent},
  { path: 'pagina-produto/:id', component: PaginaProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
