import { IComment } from "src/app/shared/models/interfaces/IComment";
import { IAuthor } from "src/app/shared/models/interfaces/IAuthor";
import { IRecipeIngredient } from "src/app/shared/models/interfaces/IRecipeIngredient";

export interface IRecipe {
        title?: string;
        imageUrl?: string;
        unit?:string;
        description?:string;
        imageArr?:{
                small:string,
                medium: string,
                big: string
            }[];
        id?:number;
        date?:{'day':number,'month':string};
        author?:IAuthor;
        UserName?:string;
        nutritions?:{'VITAMINS':{'title':string,'percent':string}[],'MINERALS':{'title':string,'percent':string}[],'Cal':{'title':string,'percent':string}[]};
        ingredients?:IRecipeIngredient[]//{'title':string,'weight':string}[];
        comments?:IComment[];
        steps?:{'id'?:number,'title'?:string,'description'?:string,'imageUrl'?:string}[];
}
