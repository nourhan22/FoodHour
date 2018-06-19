import { ISmallTool } from "src/app/shared/models/interfaces/ISmallTool";

export interface ICuttingMethods {
<<<<<<< HEAD
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
=======

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
>>>>>>> 8584d9a7a9c02a260ed32313edca22be9b4b55bb
    tools?:ISmallTool[];
    

}
