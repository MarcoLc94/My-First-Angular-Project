import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from "./navbar2/navbar2.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, Navbar2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  //Practicando 
  // mensajePadre = "hola"


  // receivedMessage: string = "";

  // receiveMessage(message: string) {
  //   this.receivedMessage = message
  // }
}
