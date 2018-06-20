import { IIngredientNutiritions } from './IIngredientNutiritions';
export interface IIngredient{
    id?:Number;
    name?:string;
    desc?:string;
    briefDesc?:string;
    img?:string;
    nutiritions?:IIngredientNutiritions[];
    weight?:string;

  }