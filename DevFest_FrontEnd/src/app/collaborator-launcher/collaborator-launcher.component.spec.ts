import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorLauncherComponent } from './collaborator-launcher.component';

describe('CollaboratorLauncherComponent', () => {
  let component: CollaboratorLauncherComponent;
  let fixture: ComponentFixture<CollaboratorLauncherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollaboratorLauncherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
