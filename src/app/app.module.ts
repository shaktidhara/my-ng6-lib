import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TempLibComponentModule } from 'temp-lib-component';
import { TypeaheadModule } from 'typeahead';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TempLibComponentModule,
    HttpClientModule,
    TypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
