import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListaProdutosComponent } from './pages/lista-produtos/lista-produtos.component';
import { PaginaProdutoComponent } from './pages/pagina-produto/pagina-produto.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { ContaUsuarioComponent } from './pages/conta-usuario/conta-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaProdutoComponent,
    ListaProdutosComponent,
    CarrinhoComponent,
    FavoritosComponent,
    ContaUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
