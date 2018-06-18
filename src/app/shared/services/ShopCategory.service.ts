import { Injectable } from '@angular/core';
import { ICategory } from '../models/interfaces/ICategory';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopCategoryService {
public categories:ICategory[]=[
  {
    title:'All Categories',
    id:1
  }, {
    title:'Dairy',
    id:2
  }, {
    title:'Fruits',
    id:3
  }, {
    title:'Seasonings & Spices',
    id:4
  }, {
    title:'Vegetables',
    id:5
  }, {
    title:'Bread',
    id:6
  }
]
constructor() { }
public getAll() :Observable<ICategory[]>
{
return of(this.categories);
}
public getByIndex(id: number)
{
    return this.categories.find(function(element){
    return element.id == id;
  })
}

}
