import { Injectable } from '@angular/core';
import { ModelUser } from '../register/register.component';
import { Router } from '@angular/router';
import FormSign from '../login/login.component';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private toastr: ToastrService) { }

  greenNotification(message: string) {
    this.toastr.success(message);
  }

  redNotification(message: string) {
    this.toastr.error(message);
  }

  login(obj: FormSign) {

    console.log(obj)
    const tryUser = {
      email: obj.email,
      password: obj.password,
    }

    const data = localStorage.getItem("userData")
    if(data){
    const parsed = JSON.parse(data!)
    console.log(parsed)
    console.log(tryUser)

    const found = parsed.filter((user: FormSign) => {
      return user.email === tryUser.email
    })

    console.log(found)
    console.log(tryUser)

    if (found[0].email) {
      this.greenNotification("User found! C:")
    } else {
      console.log("primero")
      this.redNotification("User not found :c")
      return
    }



    if (found[0].password === tryUser.password) {
      sessionStorage.setItem("userLogged", JSON.stringify(found[0]))
      console.log(found[0])
      this.greenNotification("User Verificado con exito!")
      this.router.navigate(["home"])
    } else {
      console.log("segundo")
      this.redNotification("Incorrect password :C")
      return
    }

  } else {
    return this.redNotification("No users registered")
  }

}
isAdmin(user: ModelUser) {
  user.admin ? (true) : (false)
}
}
