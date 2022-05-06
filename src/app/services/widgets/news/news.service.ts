import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, publishReplay, refCount} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = ""
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
