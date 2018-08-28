import { Component, OnInit } from '@angular/core';
import { Tutoleapp } from '../tutoleapp';
import { TUTOLEAPPS } from '../mock-tutoleapps';

@Component({
  selector: 'app-tutoleapps',
  templateUrl: './tutoleapps.component.html',
  styleUrls: ['./tutoleapps.component.css']
})

export class TutoleappsComponent implements OnInit {
 /*tutoleapp: Tutoleapp = {
    id: 1,
    name: 'Windstorm'
    tutoleapps = TUTOLEAPPS
  };*/
  tutoleapps = TUTOLEAPPS;
  selectedTutoleapp: Tutoleapp;
  onSelect(tutoleapp:Tutoleapp): void {
  this.selectedTutoleapp = tutoleapp;
}
  constructor() { }
  ngOnInit() {
  }
}
