import { Component, OnInit } from '@angular/core';
import { IcookingMethod } from 'src/app/shared/models/interfaces/icooking-method';

@Component({
  selector: 'app-cooking-method-listing',
  templateUrl: './cooking-method-listing.component.html',
  styleUrls: ['./cooking-method-listing.component.css']
})
export class CookingMethodListingComponent implements OnInit {
public IcookingMethod:IcookingMethod[];
  constructor() { }

  ngOnInit() {
    this.IcookingMethod=[
      {
      title:"hhhh",
      imageUrl:"../../../assets/images/cooking method/grill.jpg"
    }
  ,
  {
    title:"hhhh",
    imageUrl:"../../../assets/images/cooking method/grill.jpg"
  }
]
  }

}
