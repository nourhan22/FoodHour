import { Injectable } from '@angular/core';
import { ICuttingMethods } from 'src/app/shared/models/interfaces/iCuttingMethods';
import { Observable, of } from 'rxjs';
import { IUnitType } from 'src/app/shared/models/interfaces/IUnitType';

@Injectable({
  providedIn: 'root'
})
export class CuttingService {
  public units:string[]=
  ['cm','inshes'];
  public unitType:IUnitType[]=[
    {
      id:1,
      title:'Us'
    },
    {
      id:2,
      title:'Metric'
    }]
  public cuttingMethods : ICuttingMethods[]=
  [
    {
      imageUrl: '../../../assets/images/cutting/large dice.jpg',
      title: 'large dice',
      id:1,
      Description:'This square cut is most often used for vegetables like potatoes, and sometimes fruits such as watermelon.',
      Length:3/4,
      width:3/4,
      height:3/4,
      unitType:'us',
      units:'inch',
       tools:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"}]
    },
    {
      imageUrl:'../../../assets/images/cutting/Medium dice.jpg',
      title: 'Medium dice',
      id:2,
      Description:'Medium dice is a smaller version of the large dice. This is generally a good choice when recipes do not specify the size of the dice and the ingredient list just says "diced tomatoes."',
      Length:1/2,
      width:1/2,
      height:1/2,
      unitType:'us',
      units:'inch',
      // tool:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"}]
      tools:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"}]
      
    },
    {
      imageUrl:'../../../assets/images/cutting/Small dice.jpg',
      title: 'Small dice',
      id:3,
      Description:'The littlest of the dice cuts,and is produced by slicing the allumette into 1/4-inch sections.',
      Length:1/4,
      width:1/4,
      height:1/4,
      unitType:'us',
      units:'inch',
      // tool:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"}]
      tools:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"}]
      
    },
    {
      imageUrl:'../../../assets/images/cutting/Brunoise.jpg',
      title: 'Brunoise',
      id:4,
      Description:'The brunoise knife cut (pronounced BROON-wahz),which makes it the smallest of the dice cuts. Brunoise is usually used for garnishes.',
      Length:1/8,
      width:1/8,
      height:1/8,
      unitType:'us',
      units:'inch',
      // tool:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"}]
      tools:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"}]
      
    },
    {
      imageUrl:'../../../assets/images/cutting/Fine brunoise.jpg',
      title: 'Fine brunoise',
      id:5,
      Description:'Fine brunoise is a basic culinary arts knife cut which is essentially a tiny cube. It is produced by first creating a fine julienne and then cutting it into cubes.',
      Length:1/16,
      width:1/16,
      height:1/16,
      unitType:'us',
      units:'inch',
      // tool:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"}]
      tools:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"}]
      
    },
    {
      imageUrl:'../../../assets/images/cutting/Batonnet.jpg',
      title: 'Bâtonnet',
      id:6,
      Description:'The batonnet (pronounced bah-tow-NAY) is basically creating a rectangular stick . It is also the starting point for another cut, the medium dice.',
      Length:1/2,
      width:1/2,
      height:2.5,
      unitType:'us',
      units:'inch',
      // tool:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"},{title:"Equipment",imgUrl:"../../../assets/images/TourneKnife.jpg"}]
      tools:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"},{name:"Equipment",img:"../../../assets/images/TourneKnife.jpg"}]
      
    },
    {
      imageUrl:'../../../assets/images/cutting/Julienne.jpg',
      title: 'Julienne',
      id:7,
      Description:'The julienne cut is basically the allumette cut once more lengthwise. You will most often use this cut for carrots, celery, or potatoes, and see the thin strips used as a garnish. ',
      Length:1/8,
      width:1/8,
      height: 2.5,
      unitType:'us',
      units:'inch',
      // tool:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"},{title:"Equipment",imgUrl:"../../../assets/images/cutting/julienne2.jpg"}]
      tools:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"},{name:"Equipment",img:"../../../assets/images/cutting/julienne2.jpg"}]
      
    },
    {
      imageUrl:'../../../assets/images/cutting/Fine julienne.jpg',
      title: 'Fine julienne',
      id:8,
      Description:'The fine julienne knife cut is the starting point for the fine brunoise cut. This cut is often used for garnishes.',
      Length:1/16,
      width:1/16,
      height:2,
      unitType:'us',
      units:'inch',
      // tool:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"},{name:"Equipment",img:"../../../assets/images/cutting/Fine julienne2.jpg"}]
      tools:[{name:"Knife",img:"../../../assets/images/cutting/Fine julienne1.jpg"},{name:"Equipment",img:"../../../assets/images/cutting/Fine julienne2.jpg"}]
      
    },
    {
      imageUrl:'../../../assets/images/cutting/Tourne.jpg',
      title: 'Tourné',
      id:9,
      Description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
      Length:2,
      width:0.75,
      height:1,
      unitType:'us',
      units:'inch',
      // tool:[{name:"Knife",img:"../../../assets/images/cutting/TourneEquipment.jpg"},{name:"Equipment",imgUrl:"../../../assets/images/cutting/TourneKnife.jpg"}]
      tools:[{name:"Knife",img:"../../../assets/images/cutting/TourneEquipment.jpg"},{name:"Equipment",img:"../../../assets/images/cutting/TourneKnife.jpg"}]
      
    }
  ]
constructor() { }
public getAll() :Observable<ICuttingMethods[]>
{
  return of (this.cuttingMethods);
}
public getByIndex(id:Number)
{
    return this.cuttingMethods.find(function(element){
    return element.id == id;
  })
}
public onDelete(id:Number)
{
  const index= this.cuttingMethods.findIndex(a=>a.id === id);
  if(index >-1)
  {
    this.cuttingMethods.splice(index,1);
  }
}
public SearchInCuttingMethods(txtSearch:string)
{
   let filteredArr = this.cuttingMethods.filter(function(ele){
     return ele.title.toLowerCase().includes(txtSearch.toLowerCase());
   })

   return filteredArr;
}
public AddCuttingMethod(item:ICuttingMethods){
  this.cuttingMethods.push(item);
}
public lengthOfCookingMethod :number=this.cuttingMethods.length;
DeleteAll() {
  let len = this.cuttingMethods.length;
  this.cuttingMethods.splice(0, len);
}
Edit(item:  ICuttingMethods){
  const index= this.cuttingMethods .findIndex(a=>a.id===item.id);
   if(index >-1){
       this.cuttingMethods [index]=item;
       return item;
   }
 }
}

