import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.scss'],
  inputs:["name","content"]
})
export class IconBoxComponent implements OnInit {
  name : string
  content : string
  constructor() { }

  ngOnInit(): void {
  }

}
