import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoleappDetailComponent } from './tutoleapp-detail.component';

describe('TutoleappDetailComponent', () => {
  let component: TutoleappDetailComponent;
  let fixture: ComponentFixture<TutoleappDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoleappDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoleappDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
