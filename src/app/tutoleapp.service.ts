import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tutoleapp } from './tutoleapp';
import { TUTOLEAPPS } from './mock-tutoleapps';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TutoleappService {
  constructor(private messageService: MessageService) { }
  getTutoleapps(): Observable<Tutoleapp[]> {
    // TODO: send the message _after_ fetching the heroes
  this.messageService.add('TutoleappService: fetched tutoleapps');
  return of(TUTOLEAPPS);
  }
  getTutoleapp(id: number): Observable<Tutoleapp> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`TutoleappService: fetched tutoleapp id=${id}`);
    return of(TUTOLEAPPS.find(tutoleapp => tutoleapp.id === id));
  }

}
