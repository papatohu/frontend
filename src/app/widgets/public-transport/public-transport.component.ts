import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {map, Observable, Subscription} from "rxjs";
import {PublicTransportService} from "../../services/widgets/publicTransport/public-transport.service";
@Component({
  selector: 'app-public-transport',
  templateUrl: './public-transport.component.html',
  styleUrls: ['./public-transport.component.sass']
})
export class PublicTransportComponent implements OnInit {

  title = 'public-transport';
  private data: any =  [];
  constructor(private http: HttpClient, private publicTransportService:PublicTransportService) { }
  ngOnInit() {
    this.getData()
    /*
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    */
  }
  $data: Observable<Observable<any[]>> | undefined
  getData(){
    this.$data = this.publicTransportService.getInformationArray()
    //const url ='https://www.kvv.de/tunnelEfaDirect.php?action=XSLT_DM_REQUEST&outputFormat=JSON&language=de&name_dm=7001004&type_dm=stopID&useRealtime=1'
    //const url = '/tunnelEfaDirect.php?action=XSLT_STOPFINDER_REQUEST&coordOutputFormat=WGS84[dd.ddddd]&name_sf=Karlsruhe%20Europaplatz&language=de&outputFormat=JSON&type_sf=stop&useRealtime=1'
    //const url = '/tunnelEfaDirect.php?action=XSLT_STOPFINDER_REQUEST&coordOutputFormat=JSON&name_sf=Karlsruhe%20Europaplatz&language=de&outputFormat=JSON&type_sf=stop&useRealtime=1&stopID=Karlsruhe%20central%20station'
    //const url = 'https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?outputFormat=JSON&coordOutputFormat=WGS84[dd.ddddd]&depType=stopEvents&locationServerActive=1&mode=direct&name_dm=7001001&type_dm=stop&useOnlyStops=1&useRealtime=1'
    //const url = 'https://api.deutschebahn.com/frahrplan-plus/v1/stations/Karlsruhe/departures?limit=10&lang=de'
    const url = 'https://api.deutschebahn.com/freeplan/v1/location/Karlsruhe'
    const detailUrl = 'https://api.deutschebahn.com/freeplan/v1/departureBoard/8000191?date=2022-05-05'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      //console.log(this.data)


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
