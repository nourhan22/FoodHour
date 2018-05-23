import { Component, OnInit } from '@angular/core';
import { IcookingMethod } from 'src/app/shared/models/interfaces/icooking-method';
import { CookingMethodService } from 'src/app/shared/services/cookingMethod.service';

@Component({
  selector: 'app-cooking-method-listing',
  templateUrl: './cooking-method-listing.component.html',
  styleUrls: ['./cooking-method-listing.component.css']
})
export class CookingMethodListingComponent implements OnInit {
public IcookingMethod: IcookingMethod[];
  constructor(private cookingMethodService:CookingMethodService) { }
  headerTitle:string;
  ngOnInit() {
    this.headerTitle='cooking method';
    this. IcookingMethod= this.cookingMethodService.getAll();
  }

}
