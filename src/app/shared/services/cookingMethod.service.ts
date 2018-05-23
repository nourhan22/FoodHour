import { Injectable } from '@angular/core';
import { IcookingMethod } from 'src/app/shared/models/interfaces/icooking-method';

@Injectable({
  providedIn: 'root'
})
export class CookingMethodService {
  public cookingMethods: IcookingMethod[]= [
    {
    title: 'hhhh',
    imageUrl: '../../../assets/images/cooking method/grill.jpg',
     description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
     id:1
  }      
,
{
  title: 'hhhh',
  imageUrl: '../../../assets/images/cooking method/grill.jpg',
  description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
  id:2
},

  {  title:'Grill',
    imageUrl:'../../../assets/images/cooking method/grill.jpg',
    description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
    id:3
  }
,
{
  title:'Steam',
  imageUrl:'../../../assets/images/cooking method/steam.jpg',
  description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
  id:4
}
,
{
  title:'Simmer',
  imageUrl:'../../../assets/images/cooking method/simmer.jpg',
  description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
  id:5
}
,
{
  title:'Sear',
  imageUrl:'../../../assets/images/cooking method/sear.jpg',
  description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
  id:6
}
];
  
constructor() { }
public getAll()
{
  return this.cookingMethods.slice();
}
public getByIndex(id: number)
{
  //return this.cookingMethods[index];
    return this.cookingMethods.find(function(element){
    return element.id == id;
  })
}
}
