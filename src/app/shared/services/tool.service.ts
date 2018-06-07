import { Injectable } from '@angular/core';
import { ISmallTool } from '../models/interfaces/ISmallTool';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  public Tools:ISmallTool[]=[
    {
      name:'Cooker',
      img:'./assets/images/cooker3.jpg',
      id:1,
      description:'ghjgjgjhghjgjh'
    },
    {
      name:'Food Cutter',
      img:'./assets/images/cooker3.jpg',
      id:2,
      description:'ghjgjgjhghjgjh'
    },
    {
      name:'Grill',
      img:'./assets/images/cooker3.jpg',
      id:3,
      description:'ghjgjgjhghjgjh'
    },
    {
      name:'Knife',
      img:'./assets/images/cooker3.jpg',
      id:4,
      description:'ghjgjgjhghjgjh'
    },
    {
      name:'Oven',
      img:'./assets/images/cooker3.jpg',
      id:5,
      description:'ghjgjgjhghjgjh'
    },
    {
      name:'Cooker',
      img:'./assets/images/cooker3.jpg',
      id:6,
      description:'ghjgjgjhghjgjh'
    },
    {
      name:'Rangetop',
      img:'./assets/images/cooker3.jpg',
      id:7,
      description:'ghjgjgjhghjgjh'
    },
    {
      name:'Cooker',
      img:'./assets/images/cooker3.jpg',
      id:8,
      description:'ghjgjgjhghjgjh'
    },
    {
      name:'Cooker',
      img:'./assets/images/cooker3.jpg',
      id:9,
      description:'ghjgjgjhghjgjh'
    }
    
  ];
constructor() { }
public getAll() :Observable<ISmallTool[]>
{
  return of (this.Tools); 
}
public getByIndex(id: number)
{
    return this.Tools.find(function(element){
    return element.id == id;
  })
}
SearchInCookingMethods(txtSearch:string)
{
   let filteredArr = this.Tools.filter(function(ele){
     return ele.name.toLowerCase().includes(txtSearch.toLowerCase());
   })

   return filteredArr;
}
public onDelete(id:number)
{
  const index= this.Tools.findIndex(a=>a.id === id);
  if(index >-1)
  {
    this.Tools.splice(index,1);
  }
}
AddNewTool(item:ISmallTool){
  this.Tools.push(item);
}

Edit(item:ISmallTool)
 {
  //  debugger;
  //  let item = this.GetbyId(id);

  const index= this.Tools.findIndex(a=>a.id === item.id);
  if(index >-1)
  {
    this.Tools[index] = item;
    return item;
  }
 }
 DeleteAll()
 {
  let len = this.Tools.length; 
  this.Tools.splice(0,len);
 }

public lengthOfTool :number=this.Tools.length;
}
