import { Component, OnInit } from '@angular/core';
import {IRecipe} from 'src/app/shared/models/interfaces/IRecipe';
import { Input } from '@angular/core';
@Component({
  selector: 'app-miseEnPlace',
  templateUrl: './miseEnPlace.component.html',
  styleUrls: ['./miseEnPlace.component.css']
})
export class MiseEnPlaceComponent implements OnInit {
  @Input() public  RecipeItem:IRecipe;
  public item:any;
  public currentIndex:number=0;
  public start:number=0;
  public end:number=0;
  constructor() { }

  ngOnInit() {

    if(this.RecipeItem.steps.length==0)
    {
      this.RecipeItem.steps = this.RecipeItem.ingredients.map(function(r){return {title:r.ingredient.name,
        description:r.procedure , imageUrl:r.image}})
    }
    this.item=this.RecipeItem.steps[this.currentIndex];
    this.end=this.RecipeItem.steps.length-1;
  }
  nextComponenet()
  {
    this.currentIndex=this.currentIndex+1;
    if(this.currentIndex<this.RecipeItem.steps.length)
    this.item=this.RecipeItem.steps[this.currentIndex];
    else 
    this.currentIndex=this.start;
    this.item=this.RecipeItem.steps[this.currentIndex];
  }
  prevComponenet()
  {
    this.currentIndex=this.currentIndex-1;
    if(this.currentIndex >=0)
    this.item=this.RecipeItem.steps[this.currentIndex];
    else
    this.currentIndex=this.end;
    this.item=this.RecipeItem.steps[this.currentIndex];

  }
}
