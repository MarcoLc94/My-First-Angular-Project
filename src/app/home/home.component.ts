import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar2Component } from '../navbar2/navbar2.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,RouterOutlet, Navbar2Component
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',

})
export class HomeComponent { }
