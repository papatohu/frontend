import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.sass']
})
export class ChuckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
  }
}
