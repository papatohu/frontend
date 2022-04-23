import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {map} from "rxjs";
@Component({
  selector: 'app-public-transport',
  templateUrl: './public-transport.component.html',
  styleUrls: ['./public-transport.component.sass']
})
export class PublicTransportComponent implements OnInit {

  title = 'public-transport';
  private data: any =  [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getData()
    /*
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    */
  }
  getData(){
    // const url ='https://www.kvv.de/tunnelEfaDirect.php?action=XSLT_DM_REQUEST&outputFormat=JSON&language=de&name_dm=7001004&type_dm=stopID&useRealtime=1'
    const url = 'https://www.kvv.de/tunnelEfaDirect.php?action=XSLT_STOPFINDER_REQUEST&coordOutputFormat=WGS84[dd.ddddd]&name_sf=Karlsruhe%20Europaplatz&language=de&outputFormat=JSON&type_sf=stop&useRealtime=1'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)


      /*
      const headers = new Headers;
      const body = JSON.stringify(
        {
          title: "data"
        });
      headers.append('Access-Control-Allow-Origin', '*');
      this.http.post(url, body, { headers: headers })
        .pipe(map(res => res))
        .catch(err => err);
        */
    })
  }
}
