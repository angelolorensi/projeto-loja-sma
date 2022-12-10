import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css'],
})
export class AcessoriosComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {}

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
