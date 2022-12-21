import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-cadastro',
  templateUrl: './pagina-cadastro.component.html',
  styleUrls: ['./pagina-cadastro.component.css'],
})
export class PaginaCadastroComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: [null],
      senha: [null],
    });
  }

  ngOnInit(): void {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
