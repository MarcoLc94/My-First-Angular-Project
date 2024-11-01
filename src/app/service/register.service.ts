import { Injectable } from '@angular/core';
import { ModelUser } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor() { }

  registerUser(userData: ModelUser) {
    const existingUsers = JSON.parse(localStorage.getItem("userData") || "[]");
    existingUsers.push(userData);
    localStorage.setItem("userData", JSON.stringify(existingUsers));
    console.log(existingUsers)
    console.log(userData)
  }

  userExist(userData: ModelUser): boolean {
    const search: ModelUser[] = JSON.parse(localStorage.getItem("userData") || "[]");
    console.log(search);
    
    const userFound = search.find((user: ModelUser) => user.email === userData.email);
    console.log(userFound);
    
    return userFound !== undefined; 
  }
  
}
