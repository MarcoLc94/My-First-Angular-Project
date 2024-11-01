import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { ApiComponentComponent } from './api-component/api-component.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component'
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { ApiDetailsComponent } from './api-details/api-details.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" }, // Redirección a login por defecto
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { 
        path: "home", 
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'api', // Redirección al cargar "home"
                pathMatch: 'full'
            },
            {
                path: 'api',
                component: ApiComponentComponent , 
            },
            {
                path: 'todo',
                component: TodosComponent, canActivate: [authGuard]
            },
            { path: 'api/:id', component: ApiDetailsComponent, canActivate: [authGuard] },
            { path: 'todo/:id', component: TodoDetailsComponent, canActivate: [authGuard] },
        ]
    },
    { path: "**", redirectTo: "login", pathMatch: "full" }, // Manejo de rutas no encontradas
];

