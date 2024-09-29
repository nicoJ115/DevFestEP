import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { RoadMapFunderComponent } from './road-map-funder/road-map-funder.component';
import { RoadMapMemberComponent } from './road-map-member/road-map-member.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component'; 
import { LoginComponent } from './login/login.component';
import { CollaboratorLauncherComponent } from './collaborator-launcher/collaborator-launcher.component';
import { CollaboratorSignComponent } from './collaborator-sign/collaborator-sign.component';
import { MemberComponent } from './member/member.component';
import { FunderComponent } from './funder/funder.component';

const routes: Routes = [

  { 
    path: 'collaboration', 
    component: CollaboratorSignComponent
  },
  { 
    path: 'member', 
    component: MemberComponent
  },

  { 
    path: 'funder', 
    component: FunderComponent
  },
  { 
    path: 'collaboration/type', 
    component: CollaboratorLauncherComponent
  },
  { 
    path: 'log-in', 
    component: LoginComponent
  },
  { 
    path: 'questionaire', 
    component: RoadMapMemberComponent
  },
  { 
    path: '', 
    component: LandingPageComponent
  },
  { 
    path: 'roadmap', 
    component: RoadMapFunderComponent
  },
  { path: 'sign-up', 
    component: SignUpComponent
  }, 
  { path: 'about', 
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
