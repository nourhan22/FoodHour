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
 
  private ingredients: IIngredient[] = [
    {
      id: 1,
      name: 'Tomato',
      desc: 'Tomato is consumed in diverse ways, including raw, as an ingredient in many dishes, sauces, salads, and drinks. While tomatoes are botanically berry-type fruits, they are considered culinary vegetables as an ingredient or side dish for savory meals. Numerous varieties of tomato are widely grown in temperate climates across the world, with greenhouses allowing its production throughout the year. The plants typically grow to 1–3 meters (3–10 ft) in height and have a weak stem that sprawls. It is a perennial in its native habitat, and cultivated as an annual. Fruit size varies according to cultivar',
      briefDesc:'Tomato is consumed in diverse ways...',
      img: '../../assets/images/tomato.jpg',
      nutiritions:[ {nutiritionName:'Mineral', nutiritionType:' ',percentage:24}]
    },
    {
      id: 2,
      name: 'Potato',
      desc: 'The potato is a starchy, tuberous crop from the perennial nightshade Solanum tuberosum. Potato may be applied to both the plant and the edible tuber.[2] Potatoes have become a staple food in many parts of the world and an integral part of much of the world food supply. Potatoes are the world fourth-largest food crop, following maize (corn), wheat, and rice.Tubers produce glycoalkaloids in small amounts. If green sections (sprouts and skins) of the plant are exposed to light the tuber can produce a high enough concentration of glycoalkaloids to affect human health',
      briefDesc:'The potato is a starchy...',
      img: '../../assets/images/potato3.jpg',
      nutiritions:[ {nutiritionName:'Vitamin', nutiritionType:'C',percentage:24}]
    },
    {
      id: 3,
      name: 'Carrot',
      desc: 'The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow cultivars exist. Carrots are a domesticated form of the wild carrot, Daucus carota, native to Europe and southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds. The most commonly eaten part of the plant is the taproot, although the stems and leaves are eaten as well. The domestic carrot has been selectively bred for its greatly enlarged, more palatable, less woody-textured taproot.',
      briefDesc:'The carrot is a root vegetable...',
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
