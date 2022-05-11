import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrumpService {
  constructor( private http: HttpClient) { }


  getData(){
    return this.http.get<any>('https://api.tronalddump.io/random/quote');
  }

}
