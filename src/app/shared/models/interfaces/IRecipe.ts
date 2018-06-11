export interface IRecipe {
        title: string;
        imageUrl: string;
        description:string;
        id:number;
        date:{'day':number,'month':string};
        UserName:string;
        nutritions:{'VITAMINS':{'title':string,'percent':string}[],'MINERALS':{'title':string,'percent':string}[],'Cal':{'title':string,'percent':string}[]};
        ingredients:{'title':string,'weight':string}[];
        comments:{'imgOfUser':string,'userName':string,'desc':string,'replay':{'imgOfUser':string,'userName':string,'desc':string}[]};
}
