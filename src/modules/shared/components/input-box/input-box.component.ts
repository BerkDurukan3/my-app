import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
  inputs: ['name', 'parentForm', 'myFormControlName', 'type'],
})
export class InputBoxComponent implements OnInit {
  name: string;
  parentForm: FormGroup;
  myFormControlName: string;
  type: string;

  constructor() {}

  ngOnInit(): void {}
}
