import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoleappsComponent } from './tutoleapps.component';

describe('TutoleappsComponent', () => {
  let component: TutoleappsComponent;
  let fixture: ComponentFixture<TutoleappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoleappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoleappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
