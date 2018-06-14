import { Injectable } from '@angular/core';
import { IShopIngrediant } from '../models/interfaces/IShopIngrediant';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopIngrediantService {
  public ingredeints: IShopIngrediant[] = [
    {
      name: 'tomato',
      img:'./assets/images/shop list/Tomato.png',
      price:15.5
     
    },
    {
      name: 'apple',
      img:'./assets/images/shop list/apple(1).jpg',
      price:20.00
    },
    {
      name: 'orange',
      img:'./assets/images/shop list/orange-fruit-clipart-6.png',
      price:30.90
    }
  ]

constructor() { }
public getAll() :Observable<IShopIngrediant[]>
{
  return of (this.ingredeints); 
}

}
