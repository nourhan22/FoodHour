import { IAuthor } from "src/app/shared/models/interfaces/IAuthor";

export interface IComment {
    id?:number;
    user?:IAuthor;
    comment?:string;
    date?:string;
    replys?:IComment[];

}
