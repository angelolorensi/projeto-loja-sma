import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosComponent } from './pages/acessorios/acessorios.component';
import { BermudasComponent } from './pages/bermudas/bermudas.component';
import { CamisetasComponent } from './pages/camisetas/camisetas.component';
import { HomeComponent } from './pages/home/home.component';
import { MoletonsComponent } from './pages/moletons/moletons.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'bermudas', component: BermudasComponent },
  { path: 'moletons', component: MoletonsComponent },
  { path: 'acessorios', component: AcessoriosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
