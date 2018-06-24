import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLoginComponent } from './movie-login.component';

describe('MovieLoginComponent', () => {
  let component: MovieLoginComponent;
  let fixture: ComponentFixture<MovieLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
