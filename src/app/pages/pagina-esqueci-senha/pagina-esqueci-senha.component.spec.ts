import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEsqueciSenhaComponent } from './pagina-esqueci-senha.component';

describe('PaginaEsqueciSenhaComponent', () => {
  let component: PaginaEsqueciSenhaComponent;
  let fixture: ComponentFixture<PaginaEsqueciSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEsqueciSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEsqueciSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
