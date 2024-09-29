import { Component,OnInit } from '@angular/core';
import { DevfestService,Member } from '../devfest.service';


@Component({
  selector: 'app-funder',
  templateUrl: './funder.component.html',
  styleUrl: './funder.component.css'
})
export class FunderComponent implements OnInit {
  members: Member[] = [];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loadMembers();
  }

  constructor( private devFest: DevfestService) {}

  loadMembers(): void {
    this.devFest.getMembers().subscribe(
      (data: Member[]) => {
        this.members = data;
        console.log(this.members);
      },
      error => {
        console.error('Error fetching collaborations', error);
      }
    );
  }


}
