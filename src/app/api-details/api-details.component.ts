import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickandmortyserviceService } from '../service/rickandmortyservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-details.component.html',
  styleUrl: './api-details.component.css'
})

export class ApiDetailsComponent implements OnInit {
  char: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private rickService: RickandmortyserviceService,
    private router: Router
  ) {}

isOpen = false

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id")!;
      this.char = this.rickService.getOne(id);
      console.log(this.char)
    })
  }

  back = () => {
    this.router.navigate([`home`]); 
  }

}
