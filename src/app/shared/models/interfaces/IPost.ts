import { IComment } from "src/app/shared/models/interfaces/IComment";
import { IAuthor } from "src/app/shared/models/interfaces/IAuthor";

export interface IPost {
    id:number;
    author:IAuthor;
    title:string;
    image:string;
    content:string;
    day:number;
    month:string;
    comments:IComment[];
}
