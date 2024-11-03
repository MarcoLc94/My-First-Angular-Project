import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Form, FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


export default interface FormSign {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  errorMessage: string = '';
  form: any
  private _formBuilder = inject(FormBuilder)

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group<FormSign>({
      email: this._formBuilder.control("", [Validators.required, Validators.email]),
      password: this._formBuilder.control("", Validators.required),
    })
    
  }
  
  matchData() {
    if (this.form.invalid) {
      this.errorMessage = 'Email y contraseña son requeridos.';
      return;
    }

  const { email, password } = this.form.value

  console.log(email, password)

  this.userService.login(this.form.value)
}
}
