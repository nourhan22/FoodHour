import { Injectable } from '@angular/core';
import { ICart } from '../models/interfaces/ICart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public ingredeint: ICart[] = [
    {
      name: 'tomato',
      id: 1
    },
    {
      name: 'apple',
      id: 2
    },
    {
      name: 'orange',
      id: 3
    }
  ]

  constructor() { }

}
