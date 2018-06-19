import { FavouriteItems } from './favouriteItems.service';
import { IRecipe } from './../models/interfaces/IRecipe';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
export type FavouriteItems = IRecipe[];

// export interface FavouriteItem{
//   Recipes:IRecipe[];
// }

@Injectable({
  providedIn: 'root'
})
export class FavouriteItemsService {
  public favouriteItems: IRecipe[];

  constructor() {
    this.favouriteItems = [];
  }
  // public lengthOfFavItems:number=this.favouriteItems.length;

  AddToFavs(item: IRecipe) {
    debugger;
    this.favouriteItems.push(item);

  }
  GetAllFavs(): Observable<IRecipe[]> {
    return of(this.favouriteItems);
  }


  public DeleteItem(id: Number) {
    const index = this.favouriteItems.findIndex(a => a.id === id);
    if (index > -1) {
      this.favouriteItems.splice(index, 1);
    }
  }
  public RemoveFavItem(id: Number) {
    const index = this.favouriteItems.findIndex(a => a.id === id);
    if (index > -1) {
      this.favouriteItems.splice(index, 1);
    }
  } 
}
