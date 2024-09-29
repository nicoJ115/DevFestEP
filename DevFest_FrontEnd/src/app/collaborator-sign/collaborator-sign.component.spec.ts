import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorSignComponent } from './collaborator-sign.component';

describe('CollaboratorSignComponent', () => {
  let component: CollaboratorSignComponent;
  let fixture: ComponentFixture<CollaboratorSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollaboratorSignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
