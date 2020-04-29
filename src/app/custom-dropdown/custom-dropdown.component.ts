import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  selectedState;
  selectedCity;
  cities = [];
  dropdownList = [
    {value: 'andra_pradesh', viewValue: 'Andra Pradesh', cities:['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Tirupati']},
    {value: 'karnataka', viewValue: 'Karnataka', cities: ['Mysore', 'Davangere', 'Mangalore', 'Hubli-Dharwad', 'Belgaum']},
    {value: 'tamilnadu', viewValue: 'Tamilnadu', cities: ['Tiruchirappalli', 'Madurai', 'Erode', 'Vellore', 'Coimbatore']},
    {value: 'gujarat', viewValue: 'Gujarat',cities: ['Ahmedabad', 'Surat', 'Rajkot', 'Junagadh', 'Vadodara']},
    {value: 'kerala', viewValue: 'Kerala', cities: ['Kochi', 'Kozhikode', 'Thrissur', 'Malappuram']}
  ];

  constructor() { }

  onSelect(evt) {
    var selectedList = this.dropdownList.find(list => list.value == this.selectedState);
    this.cities = selectedList.cities;
  }

  ngOnInit() {
  }

}
