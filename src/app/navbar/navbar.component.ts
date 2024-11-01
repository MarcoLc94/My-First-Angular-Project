import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router"
import { CommonModule } from '@angular/common';
import { NavbarService } from '../service/navbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isVisible!: boolean;
  isNavBar!: boolean;
  isNavBar2!: boolean;

  constructor(private router: Router, private navService: NavbarService, private subscriptions: Subscription){}

  // @Input() recibirMensaje: string = "";

  // @Output() messageEvent = new EventEmitter<string>();
  // message: string = "";

  // sendMessage() {
  //   this.messageEvent.emit(this.message);
  // }
  ngOnInit(){
    this.subscriptions.add(
      this.navService.isVisible$.subscribe(value => {
        this.isVisible = value;
      })
    );

    this.subscriptions.add(
      this.navService.isNavBar$.subscribe(value => {
        this.isNavBar = value;
      })
    );

    this.subscriptions.add(
      this.navService.isNavBar2$.subscribe(value => {
        this.isNavBar2 = value;
      })
    );
  }
  

  isHide = () => {
    console.log(this.isVisible)
    this.navService.isHide()
  }

  isSHow = () => {
    this.isNavBar = true
  }
  

  back = () => {
    this.navService.back()
  }
}
