import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-esqueci-senha',
  templateUrl: './pagina-esqueci-senha.component.html',
  styleUrls: ['./pagina-esqueci-senha.component.css'],
})
export class PaginaEsqueciSenhaComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: [null],
    });
  }
  ngOnInit(): void {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
