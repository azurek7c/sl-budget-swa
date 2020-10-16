import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterAddComponent } from './poster-add.component';

describe('PosterAddComponent', () => {
  let component: PosterAddComponent;
  let fixture: ComponentFixture<PosterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
