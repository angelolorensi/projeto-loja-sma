import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ProdutosService } from 'src/app/service/produtos/produtos.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  produtos: Produto[] = [];

  constructor(
    private observer: BreakpointObserver,
    private ProdutosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.produtos = this.ProdutosService.buscarTodos();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 1400px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.close();
        this.sidenav.mode = 'over';
      } else {
        this.sidenav.open();
        this.sidenav.mode = 'side';
      }
    });
  }
}
