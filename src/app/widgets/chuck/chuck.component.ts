import { Component, OnInit } from '@angular/core';
import {ChuckService} from "../../services/widgets/chuck/chuck.service";

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.sass']
})
export class ChuckComponent implements OnInit {

  chuck: any;
  constructor(public chuckService:ChuckService) { }

  ngOnInit(): void {

    this.chuckService.getData().subscribe(
      chuck => {
        this.chuck=chuck.value;
      }
    )

  }

}
