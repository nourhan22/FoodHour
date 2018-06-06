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
      imageUrl: '../../../assets/images/large dice.jpg',
      title: 'large dice',
      id:1,
      Description:'tttttttttttttttttttttttttttttttttttttrj',
      Length:5,
      width:2,
      height:1,
      unitType:'us',
      units:'cm'
    },
    {
      imageUrl:'../../../assets/images/Medium dice.jpg',
      title: 'Medium dice',
      id:2,
      Description:'tttttttttttttttttttttttttttttttttttttrj',
      Length:5,
      width:2,
      height:1,
      unitType:'us',
      units:'cm'
    },
    {
      imageUrl:'../../../assets/images/Small dice.jpg',
      title: 'Small dice',
      id:3,
      Description:'tttttttttttttttttttttttttttttttttttttrj',
      Length:5,
      width:2,
      height:1,
      unitType:'us',
      units:'cm'
    },
    {
      imageUrl:'../../../assets/images/Brunoise.jpg',
      title: 'Brunoise',
      id:4,
      Description:'tttttttttttttttttttttttttttttttttttttrj',
      Length:5,
      width:2,
      height:1,
      unitType:'us',
      units:'cm'
    },
    {
      imageUrl:'../../../assets/images/Fine brunoise.jpg',
      title: 'Fine brunoise',
      id:5,
      Description:'tttttttttttttttttttttttttttttttttttttrj',
      Length:5,
      width:2,
      height:1,
      unitType:'us',
      units:'cm'
    },
    {
      imageUrl:'../../../assets/images/Batonnet.jpg',
      title: 'Bâtonnet',
      id:6,
      Description:'tttttttttttttttttttttttttttttttttttttrj',
      Length:5,
      width:2,
      height:1,
      unitType:'us',
      units:'cm'
    },
    {
      imageUrl:'../../../assets/images/Julienne.jpg',
      title: 'Julienne',
      id:7,
      Description:'tttttttttttttttttttttttttttttttttttttrj',
      Length:5,
      width:2,
      height:1,
      unitType:'us',
      units:'cm'
    },
    {
      imageUrl:'../../../assets/images/Fine julienne.jpg',
      title: 'Fine julienne',
      id:8,
      Description:'tttttttttttttttttttttttttttttttttttttrj',
      Length:5,
      width:2,
      height:1,
      unitType:'us',
      units:'cm'
    },
    {
      imageUrl:'../../../assets/images/Tourne.jpg',
      title: 'Tourné',
      id:9,
      Description:'tttttttttttttttttttttttttttttttttttttrj',
      Length:5,
      width:2,
      height:1,
      unitType:'us',
      units:'cm'
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
}

