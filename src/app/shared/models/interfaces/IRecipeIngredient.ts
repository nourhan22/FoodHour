import { IIngredient } from "src/app/shared/models/interfaces/IIngredient";
import { IcookingMethod } from "src/app/shared/models/interfaces/icooking-method";
import { ICuttingMethods } from "src/app/shared/models/interfaces/iCuttingMethods";
import { IRecipe } from "src/app/shared/models/interfaces/IRecipe";

export interface IRecipeIngredient {
    ingredient?: IIngredient,
    cookingMethod?: IcookingMethod,
    cuttingMethod?:ICuttingMethods,
    recipe?: IRecipe,
    countOfIngredient?:number,
    weightUnitId?:number;
    procedure?:string,
    image?:string,
    time?:number,
    TimeunitId?:number,
    
}

