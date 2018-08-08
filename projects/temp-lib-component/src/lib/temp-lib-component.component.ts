import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-temp-lib-component',
  template: `
    <select>
      <option value="1">1</option>
      <option>2</option>
      <option>3</option>
    </select>
  `,
  styles: []
})
export class TempLibComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
