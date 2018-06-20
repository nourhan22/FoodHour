import { ISmallTool } from "src/app/shared/models/interfaces/ISmallTool";

export interface ICuttingMethods {
    // tools:{title:string,imgUrl:string}[];

    title?: string;
    imageUrl?: string;
    id?: Number;
    Description?:string;
    Length?:Number;
    width?:Number;
    height?:Number;
    unitType?:string;
    units?:string;
    tools?:ISmallTool[];
    

}
