import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IcookingMethod } from 'src/app/shared/models/interfaces/icooking-method';
//import {IcookingMethod} from './src/shared/models/interfaces/icooking-method';
@Component({
  selector: 'app-cooking-method-item',
  templateUrl: './cooking-method-item.component.html',
  styleUrls: ['./cooking-method-item.component.css']
})

export class CookingMethodItemComponent implements OnInit {
@Input() public item :IcookingMethod;
  constructor() { 

  }
  ngOnInit() {
  }

}
