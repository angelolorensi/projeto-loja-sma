import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
    this.form = this.formBuilder.group(
      {
        nome: [null, Validators.required],
        email: [null, Validators.required],
        senha: [null, Validators.required],
        confirmarSenha: [null, Validators.required],
        telefone: [null, Validators.required],
        dataNascimento: [null, Validators.required],
        cpf: [null, Validators.required],
        cep: [null, Validators.required],
        endereco: [null, Validators.required],
      },
      { validators: [CustomValidators.match('senha', 'confirmarSenha')] }
    );
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.form.valid) {
      return;
    } else {
      this.usuarioService
        .salvarUsuario(this.form.value)
        .subscribe((res) => console.log(res));
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
  get confirmarSenha() {
    return this.form.get('confirmarSenha')!;
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

export default class CustomValidators {
  static match(controlName: string, matchControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const matchControl = controls.get(matchControlName);

      if (!matchControl?.errors && control?.value !== matchControl?.value) {
        matchControl?.setErrors({
          matching: {
            actualValue: matchControl?.value,
            requiredValue: control?.value,
          },
        });
        return { matching: true };
      }
      return null;
    };
  }
}
