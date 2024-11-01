import { Injectable } from '@angular/core';
import {Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private isVisibleSubject = new BehaviorSubject<boolean>(true)
  private isNavBarSubject = new BehaviorSubject<boolean>(false);
  private isNavBar2Subject = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisibleSubject.asObservable();
  isNavBar$ = this.isNavBarSubject.asObservable();
  isNavBar2$ = this.isNavBar2Subject.asObservable();

  constructor(private router: Router) { }

  isVIsibleStatus = () => {
    this.isVisibleSubject.next(this.isVisibleSubject.value)
  }


  isHide = () => {
    this.isVisibleSubject.next(!this.isVisibleSubject)
  }

  private isNavBar = false

  isSHow = () => {
    this.isNavBar = true
  }

  isNavBarStatus(): boolean {
    console.log(this.isNavBar)
    return this.isNavBar;
  }
  

  back = () => {
    this.router.navigate(["api"])
  }

  private isNavBar2 = false

  isNavBarStatus2(): boolean {
    console.log(this.isNavBar2)
    return this.isNavBar;
  }
  
}
