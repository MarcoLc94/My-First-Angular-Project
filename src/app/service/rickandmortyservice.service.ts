import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyserviceService {
  private chars: any[] = [];
  private charsSubject = new BehaviorSubject<any[]>(this.chars);

  constructor(private http: HttpClient) {}

  
  getAll() {
    const url = "https://rickandmortyapi.com/api/character/?page=1";
    this.http.get<any>(url).subscribe(
      data => {
        this.chars = data.results; 
        this.charsSubject.next(this.chars); 
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }

  getCharacters() {
    return this.charsSubject.asObservable();
  }

  getOne(id: number) {
    const foundChar = this.chars.filter((char) => {
      console.log(char.id === id)
      return char.id === id

    })
    this.charsSubject.next(foundChar)
    return foundChar[0]
  }

}
