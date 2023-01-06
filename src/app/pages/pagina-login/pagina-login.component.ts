import { Router } from '@angular/router';
import { Usuario } from './../../model/Usuario';
import { LoginService } from './../../service/login/login.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css'],
})
export class PaginaLoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.form.valid) {
      return;
    } else {
      this.loginService.loginUsuario(this.form.value).subscribe(
        (data) => {this.router.navigate(['/conta-usuario'])},
        (error) => alert('erro no login')
      );
    }
  }

  get email() {
    return this.form.get('email')!;
  }
  get senha() {
    return this.form.get('senha')!;
  }
}
