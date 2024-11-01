import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface ModelUser {
  email: string;
  password: string;
  id: number;
  admin: boolean;
}

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [FormsModule, RouterModule]
})

export class RegisterComponent {
  email: string = "";
  password: string = "";
  admin: boolean = false;

  constructor(private registerService: RegisterService) {}

  onSubmit() {
    const userData: ModelUser = {
      id: Date.now(),
      email: this.email,
      password: this.password,
      admin: this.admin
    };

    console.log(userData)

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(userData.email);

    if(!isValid){
      alert("Please enter a valid Email")
    } else {
      console.log(userData)
      if(!this.registerService.userExist(userData)){  
      this.registerService.registerUser(userData) 
      console.log(userData)
      this.email = "";
      this.password = "";
      this.admin = false;
      alert("Register successfully ✅");}
      else{
        alert("User is already registered")
      }
    }

  }

}
