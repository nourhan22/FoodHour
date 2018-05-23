import { Injectable } from '@angular/core';
import { IcookingMethod } from 'src/app/shared/models/interfaces/icooking-method';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookingMethodService {
  public cookingMethods: IcookingMethod[]= [
    {
    title: 'Broil',
    imageUrl: '../../../assets/images/cooking method/grill.jpg',
     description:'Broil (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
     id:1
  }      
,
{
  title: 'Bake',
  imageUrl: '../../../assets/images/cooking method/grill.jpg',
  description:'Bake (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
  id:2
},

  {  title:'Grill',
    imageUrl:'../../../assets/images/cooking method/grill.jpg',
    description:'Grill (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
    id:3
  }
,
{
  title:'Steam',
  imageUrl:'../../../assets/images/cooking method/steam.jpg',
  description:'Steam (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
  id:4
}
,
{
  title:'Simmer',
  imageUrl:'../../../assets/images/cooking method/simmer.jpg',
  description:'Simmer (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
  id:5
}
,
{
  title:'Sear',
  imageUrl:'../../../assets/images/cooking method/sear.jpg',
  description:'Sear (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
  id:6
}
];
  
constructor() { }
public getAll() :Observable<IcookingMethod[]>
{
  return of (this.cookingMethods); 
}
public getByIndex(id: number)
{
  //return this.cookingMethods[index];
    return this.cookingMethods.find(function(element){
    return element.id == id;
  })
}
public onDelete(id:number)
{
  debugger;
  const index= this.cookingMethods.findIndex(a=>a.id === id);
  if(index >-1)
  {
    this.cookingMethods.splice(index,1);
  }
}
SearchInCookingMethods(txtSearch:string)
{
   let filteredArr = this.cookingMethods.filter(function(ele){
     return ele.title.toLowerCase().includes(txtSearch.toLowerCase());
   })

   return filteredArr;
}

}
