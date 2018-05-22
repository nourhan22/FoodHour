import { IIngredient } from './../../shared/models/interfaces/IIngredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css']
})
export class IngredientDetailsComponent implements OnInit {

  public ingredients:IIngredient[];
  constructor() { }

  ngOnInit() {
    this.ingredients = [
      {
        id:1,
        name:'Tomato',
        desc:'tomato is very useful',
        img:'../../assets/images/ctomato.jpg'
      }
      
    ]
  }

}
