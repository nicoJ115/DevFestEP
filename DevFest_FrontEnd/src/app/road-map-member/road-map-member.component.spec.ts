import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadMapMemberComponent } from './road-map-member.component';

describe('RoadMapMemberComponent', () => {
  let component: RoadMapMemberComponent;
  let fixture: ComponentFixture<RoadMapMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadMapMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadMapMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
