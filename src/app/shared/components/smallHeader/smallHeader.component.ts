import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-smallHeader',
  templateUrl: './smallHeader.component.html',
  styleUrls: ['./smallHeader.component.css']
})
export class SmallHeaderComponent implements OnInit {
@Input() public title;
  constructor() { }

  ngOnInit() {
  }

}
