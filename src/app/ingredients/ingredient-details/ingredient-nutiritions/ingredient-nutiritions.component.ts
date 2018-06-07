
import { IIngredientNutiritions } from './../../../shared/models/interfaces/IIngredientNutiritions';
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient-nutiritions',
  templateUrl: './ingredient-nutiritions.component.html',
  styleUrls: ['./ingredient-nutiritions.component.css']
})
export class IngredientNutiritionsComponent implements OnInit {
@Input() public ingredientNutiritions: IIngredientNutiritions[];
  constructor( )
   { }

  ngOnInit() {
    // this.ingredientNutiritionService.GetAllNutiritions().subscribe(
    //   (data)=>{ this.ingredientNutiritions = data}
    //  );
  }

}
