import { IIngredient } from './../../shared/models/interfaces/IIngredient';
import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../shared/services/ingredient.service';


@Component({
  selector: 'app-ingredient-listing',
  templateUrl: './ingredient-listing.component.html',
  styleUrls: ['./ingredient-listing.component.css']
})
export class IngredientListingComponent implements OnInit {
  public headertitle:string;
  public ingredients:IIngredient[];
  constructor(private IngredientService:IngredientService) { }

  ngOnInit() {
    this.headertitle = 'Ingredients'
    this.IngredientService.GetAllIngredients().subscribe(
      (data)=>{ this.ingredients = data}
     );
  }
  onIngredientSearch(txtSearch:string)
  {
    if( txtSearch!=null)
    {
      this.ingredients = this.IngredientService.SearchInIngredients(txtSearch);
    }
    
  }
  onDelete()
  {
    
    this.IngredientService.DeleteAll();
  }
}
