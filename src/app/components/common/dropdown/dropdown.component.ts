import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() listCountries:Array<string>;
  @Output() countrySelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public selectCountry(country){
    this.countrySelected.emit(country);
  }

}
