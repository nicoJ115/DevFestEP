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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    RoadMapMemberComponent,
    RoadMapFunderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
