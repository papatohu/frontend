import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor( private http: HttpClient) { }
  //public chuck = new BehaviorSubject<any>(null);

  getData(){
    return this.http.get<any>('https://api.chucknorris.io/jokes/random');
  }

}
