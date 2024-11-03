import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router"
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './navbar2.component.html',
})
export class Navbar2Component {

  constructor(private router: Router){}

  isVisible = false;

  isHide = () => {
    this.isVisible = !this.isVisible
    console.log(this.isVisible)
  }

  back = () => {
    this.router.navigate(["api"])
  }

 
  data = sessionStorage.getItem("userLogged")
  

  deleteUserSesion = () => {
    sessionStorage?.removeItem("userLogged")
  }

}
