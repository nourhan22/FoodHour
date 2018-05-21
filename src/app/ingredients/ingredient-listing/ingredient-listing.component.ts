import { IIngredient } from './../../shared/models/interfaces/IIngredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-listing',
  templateUrl: './ingredient-listing.component.html',
  styleUrls: ['./ingredient-listing.component.css']
})
export class IngredientListingComponent implements OnInit {

  public ingredients:IIngredient[];
  constructor() { }

  ngOnInit() {
    this.ingredients = [
      {
        name:'Tomato',
        desc:'tomato is very useful',
        img:'../../assets/images/o.jpg'
      },
      {
        name:'Botato',
        desc:'botato is very useful',
        img:'../../assets/images/o.jpg'
      },
      {
        name:'Carrot',
        desc:'Carrot is very useful',
        img:'../../assets/images/o.jpg'
      },
    ]
  }

}
