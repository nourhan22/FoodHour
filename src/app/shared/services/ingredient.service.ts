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
      desc:'tomato is very useful',
      img:'../../assets/images/tomato.jpg'
    },
    {
      id:2,
      name:'Potato',
      desc:'potato is very useful',
      img:'../../assets/images/potato3.jpg'
    },
    {
      id:3,
      name:'Carrot',
      desc:'Carrot is very useful',
      img:'../../assets/images/storecarrots.jpg'
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
SearchInIngredients(txtSearch:string)
{
   let filteredArr = this.ingredients.filter(function(ele){
     return ele.name.toLowerCase().includes(txtSearch.toLowerCase());
   })

   return filteredArr;
}

}
