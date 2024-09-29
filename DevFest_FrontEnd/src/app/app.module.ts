import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCardModule} from '@angular/material/card';
import { RoadMapMemberComponent } from './road-map-member/road-map-member.component';
import { RoadMapFunderComponent } from './road-map-funder/road-map-funder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabGroupDynamicHeightExampleComponent } from './tab-group-dynamic-height-example/tab-group-dynamic-height-example.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    RoadMapMemberComponent,
    RoadMapFunderComponent,
    SignUpComponent,
    TabGroupDynamicHeightExampleComponent,
    AboutComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
