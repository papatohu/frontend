import { Injectable } from '@angular/core';
import {map, Observable, publishReplay, refCount} from "rxjs";
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
  url = "https://api.nasa.gov/planetary/apod?api_key=eMlRsZadzHAMCAKuxUGRYYTxa4ljuiF6KgggX9wa"
  constructor(private http: HttpClient) { }

  caches: Observable<any> | undefined
  getInformation(): Observable<any>{
    if (!this.caches) {
      this.caches = this.http.get(this.url).pipe(
        map(data => data),
        publishReplay(1), // this tells Rx to cache the latest emitted
        refCount() // and this tells Rx to keep the Observable alive as long as there are any Subscribers
      );
    }
    return this.caches;
  }
}
