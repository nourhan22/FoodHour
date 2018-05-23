import { IIngredient } from './../models/interfaces/IIngredient';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredients:IIngredient[] = [
    {
      id:1,
      name:'Tomato',
      img:'./assets/images/ctomato.jpg',
      desc:'Tomato is very useful'
    },
    {
      id:2,      
      name:'botato',
      img:'./assets/images/ctomato.jpg',
      desc:'botato is very useful',
      
    },
    {
      id:3,
      name:'carrot',
      img:'./assets/images/26a.jpg',
      desc:'carrot is very useful'
    }

  ] ;
constructor() { 
}

GetAllIngredients()
{
  return this.ingredients.slice();
}

GetbyId(id : number)
{

  return this.ingredients.find(function(element){
    return element.id == id;
  })
}

}
