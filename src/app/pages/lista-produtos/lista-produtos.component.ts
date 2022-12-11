import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CamisetasService } from 'src/app/service/camisetas/camisetas.service';
import { Camiseta } from 'src/app/model/Camiseta';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  camisetas: Camiseta[] = [];

  constructor(
    private observer: BreakpointObserver,
    private camisetasService: CamisetasService
  ) {}

  ngOnInit(): void {
    this.camisetas = this.camisetasService.buscarTodos();
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
