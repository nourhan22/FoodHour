import { Component, OnInit } from '@angular/core';
import { IcookingMethod } from 'src/app/shared/models/interfaces/icooking-method';
import { CookingMethodService } from 'src/app/shared/services/cookingMethod.service';

@Component({
  selector: 'app-cooking-method-listing',
  templateUrl: './cooking-method-listing.component.html',
  styleUrls: ['./cooking-method-listing.component.css']
})
export class CookingMethodListingComponent implements OnInit {
public cookingMethods: IcookingMethod[];

  constructor(private cookingMethodService:CookingMethodService) { }
  headerTitle:string;
  ngOnInit() {
    this.headerTitle='cooking method';
    
    this.cookingMethodService.getAll().subscribe(
      (data)=>{
        
        this.cookingMethods= data;
      }
    );
    
  }
  onCookingMethodsSearch(txtSearch:string)
  {
    if( txtSearch!=null)
    {
      //this.cookingMethods= this.cookingMethodService.getAll();
      this.cookingMethods = this.cookingMethodService.SearchInCookingMethods(txtSearch);
    }
    
  }
}
