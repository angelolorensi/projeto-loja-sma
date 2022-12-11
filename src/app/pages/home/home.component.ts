import { CamisetasService } from './../../service/camisetas/camisetas.service';
import { Component, OnInit } from '@angular/core';
import { Camiseta } from 'src/app/model/Camiseta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  camisetas: Camiseta[] = [];

  constructor(private camisetaService: CamisetasService) {}

  ngOnInit(): void {
    this.camisetas = this.camisetaService.buscarMaisVendidos();
  }
}
