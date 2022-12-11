import { ActivatedRoute, Router } from '@angular/router';
import { CamisetasService } from 'src/app/service/camisetas/camisetas.service';
import { Component, OnInit } from '@angular/core';
import { Camiseta } from '../model/Camiseta';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

  camiseta!: Camiseta;

  constructor(private camisetaService: CamisetasService, private activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe((params) => {
          if (params['id']) {
            this.camiseta = camisetaService.buscarCamisetaPorId(params['id']);
          }
        });
  }

  ngOnInit(): void {

  }

}
