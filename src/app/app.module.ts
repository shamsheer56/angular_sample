import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component'; // For Loading app component
import {SearchService} from "./search.service"; // For search service

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
