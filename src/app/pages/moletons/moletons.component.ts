import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-moletons',
  templateUrl: './moletons.component.html',
  styleUrls: ['./moletons.component.css'],
})
export class MoletonsComponent implements OnInit {
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
