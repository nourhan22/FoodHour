import { ISmallTool } from "src/app/shared/models/interfaces/ISmallTool";

export interface ICuttingMethods {
    title: string;
    imageUrl: string;
    id: Number;
    Description:string;
    Length:Number;
    width:Number;
    height:Number;
    unitType:string;
    units:string;
    //tool:{name:string,img:string}[];
    tools?:ISmallTool[];
}
