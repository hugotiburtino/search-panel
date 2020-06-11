import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GoogleBoxComponent } from './google-box/google-box.component';
import { DuckduckgoBoxComponent } from './duckduckgo-box/duckduckgo-box.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GoogleService } from './services/google.service';
import { DuckDuckGoService } from './services/duck-duck-go.service';


@NgModule({
  declarations: [
    AppComponent,
    GoogleBoxComponent,
    DuckduckgoBoxComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GoogleService,
    DuckDuckGoService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }