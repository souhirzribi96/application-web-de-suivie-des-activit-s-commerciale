import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { CalendarModule } from 'angular-calendar';

import { routing } from './app.routing';
import { AppSettings } from './app.settings';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import {CommonModule, ViewportScroller} from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0'
    }),
    CalendarModule.forRoot(),
    routing
  ],
  providers: [ AppSettings,ViewportScroller,CommonModule],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
