import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadMapFunderComponent } from './road-map-funder.component';

describe('RoadMapFunderComponent', () => {
  let component: RoadMapFunderComponent;
  let fixture: ComponentFixture<RoadMapFunderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadMapFunderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadMapFunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
