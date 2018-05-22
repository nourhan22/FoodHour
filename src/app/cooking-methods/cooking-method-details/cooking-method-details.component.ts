import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IcookingMethod } from 'src/app/shared/models/interfaces/icooking-method';

@Component({
  selector: 'app-cooking-method-details',
  templateUrl: './cooking-method-details.component.html',
  styleUrls: ['./cooking-method-details.component.css']
})
export class CookingMethodDetailsComponent implements OnInit {
  @Input() public item: IcookingMethod;
  constructor() { }

  ngOnInit() {
    
  
  }

}
