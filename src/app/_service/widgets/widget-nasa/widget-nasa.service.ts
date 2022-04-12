import { Injectable } from '@angular/core';
import {catchError, EMPTY, Observable, shareReplay} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WidgetNasaService {
//Angular Cache:
// 	Naiver Cache:
// Cache mit cache = {}; Problem: das Hinzufügen eines Wertes in den Cache wird erst nach ALLEN
// HTTP Anfragen geschehen
//
// 	Weniger naiver Cache: Das Observable an sich im Cache speichern
  cache = new Observable()
  url = "https://api.nasa.gov/planetary/apod?api_key=eMlRsZadzHAMCAKuxUGRYYTxa4ljuiF6KgggX9wa"
  constructor(private http: HttpClient) { }

  private resolveRequest():Observable<any> {
    if(!this.cache==null){
      console.log('returning from cache!')
      return this.cache
    }
    console.log('requesting...')
    this.cache = this.http.get(this.url).pipe(
      shareReplay(1),
      catchError(err => {
        // @ts-ignore
        delete this.cache;
        return EMPTY;
      }));
    return this.cache;
  }
  getInformation(): NASAObject{
    const output = new NASAObject()
    this.resolveRequest().subscribe(res => {output.imageUrl = res.url; output.explanation = res.explanation; output.imageTitle = res.title})
    return output
  }
}

class NASAObject {
  imageUrl: string = "";
  explanation: string = "";
  imageTitle: string = "";
}
