import { IIngredientNutiritions } from './../models/interfaces/IIngredientNutiritions';
import { IIngredient } from './../models/interfaces/IIngredient';
import { Injectable } from '@angular/core';
import { INutiritionType } from '../models/interfaces/INutiritionType';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private nutiritionTypes: INutiritionType[] = [
    {
      id: 1,
      title: 'Vitamin'
    },
    {
      id: 2,
      title: 'Mineral'
    },
    {
      id: 3,
      title: 'Fat'
    },
    {
      id: 4,
      title: 'Fiber'
    },
    {
      id: 5,
      title: 'Protien'
    },
    {
      id: 6,
      title: 'Water'
    },
  ];
  // private ingredientNutirition:IIngredientNutiritions[] = [
   
  //   {
  //     nutiritionName:'molybdnum',
  //     nutiritionType:' ',
  //     percentage:24
  //   },
  //   {
  //     nutiritionName:'Vitamin',
  //     nutiritionType:' K',
  //     percentage:54
  //   },

  // ];
  private ingredients: IIngredient[] = [
    {
      id: 1,
      name: 'Tomato',
      desc: 'tomato is very useful',
      img: '../../assets/images/tomato.jpg',
      nutiritions:[ {nutiritionName:'Mineral', nutiritionType:' ',percentage:24}]
    },
    {
      id: 2,
      name: 'Potato',
      desc: 'potato is very useful',
      img: '../../assets/images/potato3.jpg',
      nutiritions:[ {nutiritionName:'Vitamin', nutiritionType:'C',percentage:24}]
    },
    {
      id: 3,
      name: 'Carrot',
      desc: 'Carrot is very useful',
      img: '../../assets/images/storecarrots.jpg',
      nutiritions:[ {nutiritionName:'Mineral', nutiritionType:'',percentage:24}]
    }

  ];
  public lengthOfIngredients: number = this.ingredients.length;
  constructor() {
  }

  GetAllIngredients(): Observable<IIngredient[]> {
    return of(this.ingredients);
  }

  GetbyId(id: number) {

    return this.ingredients.find(function (element) {
      return element.id == id;
    })
  }
  SearchInIngredients(txtSearch: string) {
    let filteredArr = this.ingredients.filter(function (ele) {
      return ele.name.toLowerCase().includes(txtSearch.toLowerCase());
    })

    return filteredArr;
  }
  AddNewIngredient(item: IIngredient) {

    this.ingredients.push(item);
    
  }
  Edit(item: IIngredient){
   const index= this.ingredients.findIndex(a=>a.id===item.id);
    if(index >-1){
        this.ingredients[index]=item;
        return item;
    }
  }
  GetNutiritionTypes() {
    return this.nutiritionTypes;
  }
  public DeleteItem(id: Number) {
    const index = this.ingredients.findIndex(a => a.id === id);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }
  }
  DeleteAll() {
    let len = this.ingredients.length;
    this.ingredients.splice(0, len);
  }

}
