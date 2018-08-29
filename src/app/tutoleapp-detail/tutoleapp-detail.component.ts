import { Component, OnInit, Input } from '@angular/core';
import { Tutoleapp } from '../tutoleapp';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TutoleappService } from '../tutoleapp.service';

@Component({
  selector: 'app-tutoleapp-detail',
  templateUrl: './tutoleapp-detail.component.html',
  styleUrls: ['./tutoleapp-detail.component.css']
})
export class TutoleappDetailComponent implements OnInit {
  @Input() tutoleapp: Tutoleapp;
  constructor(
    private route: ActivatedRoute,
    private tutoleappService: TutoleappService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTutoleapp();
  }
  getTutoleapp(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tutoleappService.getTutoleapp(id)
      .subscribe(tutoleapp => this.tutoleapp = tutoleapp);
  }
  goBack(): void {
    this.location.back();
  }
}
