import { Injectable } from '@angular/core';
import { ICategory } from '../models/interfaces/ICategory';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopCategoryService {
public categories:ICategory[]=[
  {
    title:'Bread',
    id:1
  }, {
    title:'Dairy',
    id:2
  }, {
    title:'fruits',
    id:3
  }, {
    title:'seasonings & spices',
    id:4
  }, {
    title:'Vegetables',
    id:5
  }
]
constructor() { }
public getAll() :Observable<ICategory[]>
{
return of(this.categories);
}

}
