import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { RoadMapFunderComponent } from './road-map-funder/road-map-funder.component';
import { RoadMapMemberComponent } from './road-map-member/road-map-member.component';

const routes: Routes = [

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
