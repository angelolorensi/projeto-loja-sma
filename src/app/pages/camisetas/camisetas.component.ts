import { CamisetasService } from './../../service/camisetas/camisetas.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Camiseta } from 'src/app/shared/model/Camiseta';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.css'],
})
export class CamisetasComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  camisetas: Camiseta[] = [];

  constructor(private observer: BreakpointObserver,private camisetasService:CamisetasService) {}

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
