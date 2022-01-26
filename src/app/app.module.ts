import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OntSharedModule } from './ont-shared/ont-shared.module';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OntSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
