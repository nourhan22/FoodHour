import { IComment } from "src/app/shared/models/interfaces/IComment";
import { IAuthor } from "src/app/shared/models/interfaces/IAuthor";
export interface IRecipe {
        title: string;
        imageUrl: string;
        description:string;
        imageArr:string[];
        id:number;
        date:{'day':number,'month':string};
        author:IAuthor;
        UserName:string;
        nutritions:{'VITAMINS':{'title':string,'percent':string}[],'MINERALS':{'title':string,'percent':string}[],'Cal':{'title':string,'percent':string}[]};
        ingredients:{'title':string,'weight':string}[];
        comments:IComment[];
        steps:{'id':number,'title':string,'description':string,'imageUrl':string}[];
}
