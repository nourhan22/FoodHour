import { IIngredientNutiritions } from './../models/interfaces/IIngredientNutiritions';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientNutiritionService {
private ingredientNutiritions: IIngredientNutiritions[] = [
  {
    nutiritionName:'Vitamin',
    nutiritionType:'C',
    percentage:33
  },
  {
    nutiritionName:'Biotin',
    nutiritionType:'',
    percentage:24
  },
  {
    nutiritionName:'Molybdnum',
    nutiritionType:'',
    percentage:20
  },
  {
    nutiritionName:'Vitamin',
    nutiritionType:'K',
    percentage:16
  }
];
constructor() { }
GetAllNutiritions():Observable<IIngredientNutiritions[]>
{
  return of (this.ingredientNutiritions);
}

}
