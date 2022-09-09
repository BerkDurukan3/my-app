import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
  inputs:["name"]
})
export class InputBoxComponent implements OnInit {

  name : string
  constructor() { }

  ngOnInit(): void {
    console.info(this.name)
  }

}
