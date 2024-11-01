import { Component, OnInit } from '@angular/core';
import { RickandmortyserviceService } from '../service/rickandmortyservice.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-component',
  standalone: true,
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.css'],
  imports: [RouterLink]
})

export class ApiComponentComponent implements OnInit {
  characters: any[] = []; 

  constructor(private rickService: RickandmortyserviceService, private router: Router) {}

  ngOnInit() {
    this.rickService.getAll(); 
    this.rickService.getCharacters().subscribe(data => {
      this.characters = data; 
      console.log(this.characters)
    });
  }

  redirectDetails (id: number){
    this.router.navigateByUrl(`/home/api/${id}`); 
   
  }  

}
