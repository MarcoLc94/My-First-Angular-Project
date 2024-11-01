import { CanActivateFn} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 
 const userLogged = sessionStorage.getItem("userLogged")

 if(userLogged){
   const parsed = JSON.parse(userLogged)
   console.log(parsed.admin)
   if(parsed.admin)return true
}
return false
}
