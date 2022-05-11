import { Component, OnInit } from '@angular/core';
import {TrumpService} from "../../services/widgets/trump/trump.service";

@Component({
  selector: 'app-tronald-dump',
  templateUrl: './tronald-dump.component.html',
  styleUrls: ['./tronald-dump.component.sass']
})
export class TronaldDumpComponent implements OnInit {

  trump:any;
  constructor(public TrumpService:TrumpService) { }


  ngOnInit(): void {
    this.TrumpService.getData().subscribe(
      trump => {
        this.trump = trump.value;
      }
    )
  }


}
