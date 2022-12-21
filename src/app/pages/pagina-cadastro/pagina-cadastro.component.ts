import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/service/usuarios/usuarios.service';

@Component({
  selector: 'app-pagina-cadastro',
  templateUrl: './pagina-cadastro.component.html',
  styleUrls: ['./pagina-cadastro.component.css'],
})
export class PaginaCadastroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService
  ) {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      telefone: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      cpf: [null, Validators.required],
      cep: [null, Validators.required],
      endereco: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.form.valid) {
      return;
    } else {
      this.usuarioService.salvarUsuario(this.form.value).subscribe((res) => console.log(res));
    }
  }

  get nome() {
    return this.form.get('nome')!;
  }
  get email() {
    return this.form.get('email')!;
  }
  get cpf() {
    return this.form.get('cpf')!;
  }
  get telefone() {
    return this.form.get('telefone')!;
  }
  get senha() {
    return this.form.get('senha')!;
  }
  get cep() {
    return this.form.get('cep')!;
  }
  get endereco() {
    return this.form.get('endereco')!;
  }
  get dataNascimento() {
    return this.form.get('dataNascimento')!;
  }
}
