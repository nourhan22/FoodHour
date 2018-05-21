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
      title:"Grill",
      imageUrl:"../../../assets/images/cooking method/grill.jpg"
    }
  ,
  {
    title:"Steam",
    imageUrl:"../../../assets/images/cooking method/steam.jpg"
  }
  ,
  {
    title:"Simmer",
    imageUrl:"../../../assets/images/cooking method/simmer.jpg"
  }
  ,
  {
    title:"Sear",
    imageUrl:"../../../assets/images/cooking method/sear.jpg"
  }
]
  }

}
