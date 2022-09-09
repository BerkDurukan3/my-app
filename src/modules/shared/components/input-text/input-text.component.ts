import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  inputs:["name","content"]
})
export class InputTextComponent implements OnInit {

  name: string
  content : string
  constructor() { }

  ngOnInit(): void {
  }

}
