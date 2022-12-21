import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css'],
})
export class PaginaLoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: [null],
      senha: [null]
    })
  }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email,]);

}
