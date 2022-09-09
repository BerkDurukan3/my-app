import { Component, OnInit } from '@angular/core';
interface City {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  inputs:["name"]
})
export class DropdownComponent implements OnInit {
  name : string
  cities: City[] = [
    {value: 'ankara', viewValue: 'Ankara'},
    {value: 'istanbul', viewValue: 'İstanbul'},
    {value: 'izmir', viewValue: 'İzmir'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
