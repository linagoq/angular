import { Component, OnInit } from '@angular/core';
import { Tutoleapp } from '../tutoleapp';
import { TutoleappService } from '../tutoleapp.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent  implements OnInit {
  tutoleapps: Tutoleapp[];
  constructor(private tutoleappService: TutoleappService) { }

  ngOnInit() {
    this.getTutoleapps();
  }

  getTutoleapps(): void {
    this.tutoleappService.getTutoleapps()
    .subscribe(tutoleapps => this.tutoleapps = tutoleapps.slice(1, 5));
  }
}
