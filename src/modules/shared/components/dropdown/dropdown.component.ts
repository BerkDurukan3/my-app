import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
interface City {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  inputs: ['name', 'parentForm', 'myFormControlName'],
})
export class DropdownComponent implements OnInit {
  name: string;
  parentForm: FormGroup;
  myFormControlName: string;
  cities: City[] = [
    { value: 'ankara', viewValue: 'Ankara' },
    { value: 'istanbul', viewValue: 'İstanbul' },
    { value: 'izmir', viewValue: 'İzmir' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
