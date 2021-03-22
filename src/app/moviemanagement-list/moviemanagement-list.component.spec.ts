import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviemanagementListComponent } from './moviemanagement-list.component';

describe('MoviemanagementListComponent', () => {
  let component: MoviemanagementListComponent;
  let fixture: ComponentFixture<MoviemanagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviemanagementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviemanagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
