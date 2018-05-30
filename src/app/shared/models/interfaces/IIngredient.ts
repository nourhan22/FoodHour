import { IIngredientNutiritions } from './IIngredientNutiritions';
export interface IIngredient{
    id:Number;
    name:string;
    desc:string;
    img:string;
    nutiritions:IIngredientNutiritions[];

  }