import { Component,OnInit } from '@angular/core';
import { DevfestService,Collaborator } from '../devfest.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit{
  collaborations: Collaborator[] = [];

  constructor(private DevFest: DevfestService) {}


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loadCollaborations();
  }

  loadCollaborations(): void {
    this.DevFest.getCollaborators().subscribe(
      (data: Collaborator[]) => {
        this.collaborations = data;
        console.log(this.collaborations)
      },
      error => {
        console.error('Error fetching collaborations', error);
      }
    );
  }

}
