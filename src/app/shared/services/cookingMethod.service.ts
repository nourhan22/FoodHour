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
    imageUrl: '../../../assets/images/cooking method/broil.jpg',
     description:'Broiling is similar to grilling, except the heat source comes from the top. It is usually done in an oven by adjusting the setting to broil. Broiling happens very quickly and it’s best to watch the food carefully when broiling so it does not burn. Getting the cheese on top of lasagna golden brown and crispy is an example of broiling.',
     id:1
  }      
,
{
  title: 'Bake',
  imageUrl: '../../../assets/images/cooking method/bake.jpg',
  description:'Bake (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
  id:2
},

  {  title:'Grill',
    imageUrl:'../../../assets/images/cooking method/grill.jpg',
    description:'When grilling food, the heat source comes from the bottom. Think cooking a steak on a grill — the heat only comes from the coals underneath the grate. Grilling usually involves an open flame, but can also be done with a grill pan on a stovetop. Foods are cooked by heating the grill grates, which gives ingredients the charred, grilled lines.',
    id:3
  }
,
{
  title:'Steam',
  imageUrl:'../../../assets/images/cooking method/steam.jpg',
  description:'To cook an ingredient with steam, food is usually placed in a separate steamer over hot liquid. The food is cooked by the steam from the liquid and does not come in contact with the liquid. ',
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
  description:'When simmering food, it is usually cooked with a liquid in a pot on the stovetop. It is done over low heat and tiny bubbles should appear on the surface. ',
  id:6
}
,
{
  title:'Poach',
  imageUrl:'../../../assets/images/cooking method/poach.jpg',
  description:'To poach food, it should be completely submerged in liquid that is between 160 and 180 degrees. The food item remains in the liquid until fully cooked through and tender.  ',
  id:7
}
,
{
  title:'Stew',
  imageUrl:'../../../assets/images/cooking method/stew.jpg',
  description:'Stewing is similar to braising because the ingredient is first seared and then cooked in liquid, but it uses smaller ingredients like diced meats and vegetables. ',
  id:8
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
AddNewCooKingMethod(item:IcookingMethod){
  debugger;
  this.cookingMethods.push(item);
}
public lengthOfCookingMethod :number=this.cookingMethods.length;
DeleteAll()
 {
  let len = this.cookingMethods.length;
  this.cookingMethods.splice(0,len);
 }

Edit(item:IcookingMethod)
{
 const index= this.cookingMethods.findIndex(a=>a.id === item.id);
 if(index >-1)
 {
   this.cookingMethods[index] = item;
   return item;
 }
}
}
