import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCheckoutComponent } from './movie-checkout.component';

describe('MovieCheckoutComponent', () => {
  let component: MovieCheckoutComponent;
  let fixture: ComponentFixture<MovieCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
