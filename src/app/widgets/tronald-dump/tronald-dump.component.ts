import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tronald-dump',
  templateUrl: './tronald-dump.component.html',
  styleUrls: ['./tronald-dump.component.sass']
})
export class TronaldDumpComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  getQuote() {
    fetch('io.tronalddump.api/random')
  }

}
