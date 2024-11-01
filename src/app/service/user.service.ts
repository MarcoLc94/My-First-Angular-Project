import { Injectable } from '@angular/core';
import { ModelUser } from '../register/register.component';
import { Router } from '@angular/router';
import FormSign from '../login/login.component';
import { Sign } from 'crypto';
import { Mode } from 'fs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  login(obj: FormSign) {

    console.log(obj)
    const tryUser = {
      email: obj.email,
      password: obj.password,
    }

    const data = localStorage.getItem("userData")
    const parsed = JSON.parse(data!)
    console.log(parsed)
    console.log(tryUser)

    const found = parsed.filter((user: FormSign) => {
      return user.email === tryUser.email
    })

    console.log(found)
    console.log(tryUser)

    if (found[0].email) {
      alert(" Email encontrado! ")
    } else {
      console.log("primero")
      alert("User not found :C")
      return
    }



    if (found[0].password === tryUser.password) {
      sessionStorage.setItem("userLogged", JSON.stringify(found[0]))
      console.log(found[0])
      alert("User Verificado con exito!")
      this.router.navigate(["home"])
    } else {
      console.log("segundo")
      alert("Incorrect password :C")
      return
    }

  }

  isAdmin(user: ModelUser) {
    user.admin ? (true) : (false)
  }
}
