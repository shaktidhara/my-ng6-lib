import { Component } from '@angular/core';
import { TypeaheadService } from './typeahead.service';
import { TypeaheadComponent } from 'typeahead';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listItem:any = [];
  selectedItemValue:any = {
    name: '',
    domain: '',
    logo: ''
  };
  minCharacter:number = 2;
  callServiceFromCom:boolean = false;
  serviceUrl:string = 'https://autocomplete.clearbit.com/v1/companies/suggest?query=';
  constructor(private typeaheadService: TypeaheadService){}
  getListItem(event):void {
    console.log('searched text:::', event);
    this.typeaheadService.getData(this.serviceUrl, event)
    .subscribe((response) => {
      this.listItem = response;
    })
  }
  selectedItem(event):void {
    this.selectedItemValue = event;
  }
}
