import { Component } from '@angular/core';

@Component({
  selector: 'app-collaborator-launcher',
  templateUrl: './collaborator-launcher.component.html',
  styleUrl: './collaborator-launcher.component.css'
})
export class CollaboratorLauncherComponent {
  onFunderClick() {
    console.log('Funder button clicked');
    // Add logic for Funder button here
  }

  onMembersClick() {
    console.log('Members button clicked');
    // Add logic for Members button here
  }
}
