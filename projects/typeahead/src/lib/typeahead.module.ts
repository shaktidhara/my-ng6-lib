import { NgModule } from '@angular/core';
import { TypeaheadComponent } from './typeahead.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [TypeaheadComponent],
  exports: [TypeaheadComponent]
})
export class TypeaheadModule { }
