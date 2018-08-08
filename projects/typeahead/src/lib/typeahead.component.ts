import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TypeaheadService } from './typeahead.service';

@Component({
  selector: 'ui-typeahead',
  templateUrl:'typeahead.component.html',
  styleUrls: ['typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {
  @Output() getListItem:EventEmitter<string> = new EventEmitter();
  @Output() selectedItem:EventEmitter<LabelPair> = new EventEmitter();
  @Input() minCharacter:number = 2;
  @Input() serviceUrl:string = '';
  @Input() callServiceFromCom:boolean = false;
  searchedText:string = '';
  searchedItemList:LabelPair[] = [];
  showSearchedList:boolean = false;
  constructor(private typeaheadService: TypeaheadService) { }

  ngOnInit() {
  }
  @Input() 
  set listItem(list) {
    this.searchedItemList = list;
  }
  keyupHandler(event):void{
    if(String(event.target.value).length > this.minCharacter) {
      this.showSearchedList = true;
      if(this.callServiceFromCom) {
        this.getListItemFromServer(event.target.value);
      } else {
        this.getListItem.emit(event.target.value);
      }      
    } else {
      this.showSearchedList = false;
    }
  }
  selectItemHandlar(item):void {
    this.selectedItem.emit(item);
    this.searchedText = item.name;
    this.showSearchedList = false;
  }
  focusoutHandler(event):void {

  }
  focusinHandler(event):void {
    this.showSearchedList = true;
  }
  getListItemFromServer(event):void {
    console.log('searched text:::', event);
    this.typeaheadService.getData(this.serviceUrl, event)
    .subscribe((response) => {
      this.searchedItemList = response;
    })
  }
}
export interface LabelPair{
  name: string,
  domain: string,
  logo: string
}