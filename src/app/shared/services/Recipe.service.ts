import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { IRecipe } from 'src/app/shared/models/interfaces/IRecipe';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { IRecipeIngredient } from 'src/app/shared/models/interfaces/IRecipeIngredient';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
<<<<<<< HEAD
  favourites:IRecipe[];
  public Recipes: IRecipe[] = [
    {
      id: 1,
      imageUrl: '../../assets/images/dd.jpg',
      title: 'Panee',
=======
  public onRecipeIngredientAdded = new Subject<IRecipeIngredient>();
  public Recipes: IRecipe[] = [
    {
      id: 1,
      imageUrl: '../../../../assets/images/cooking method/grill.jpg',
      unit:"us",
      title: 'pasta',
>>>>>>> 4ba39bc4788874a1b82056ccb4b289d57b561bbd
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      imageArr:[ {small: '../../../../assets/images/cooking method/steam.jpg',
      medium: '../../../../assets/images/cooking method/steam.jpg',
      big: '../../../../assets/images/cooking method/steam.jpg'},
      {
        small: '../../../../assets/images/cooking method/grill.jpg',
        medium: '../../../../assets/images/cooking method/grill.jpg',
        big: '../../../../assets/images/cooking method/grill.jpg'
      },
  ],
      date:{day:2,month:'jan'},
      author:{username:'Hana',state:'i love cooking',image:"../../../assets/images/comunity/avatar.jpg"},
      UserName:"Mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'o','percent':'25'}],
      'MINERALS':[{title:'A','percent':'25%'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'},{title:'A','percent':'25'}],'Cal':[{title:'calories','percent':'25'},{title:'fat','percent':'25'},{title:'saturation','percent':'25'},{title:'sugars','percent':'25'},{title:'salt','percent':'25'}]},
      ingredients:[{ingredient:{name:"TOMATOO",weight:"17 g"}},{ingredient:{name:"TOMATOO",weight:"17 g"}}],//[{'title':'TOMATOO','weight':'17 g'}],
      comments:[
        {
          id:1,
          user:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/avatar.jpg"},
          comment:`John Doe Reply
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
           gravida pellentesque urna varius vit    mmmmmmmmmae, gravida 
          pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Nam viverra euismod odio`,
          date:"November 12, 2016 at 1:38 pm",
          replys:[
            {
            id:1,
            user:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/avatar.jpg"},
            comment:`John Doe Reply
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
             gravida pellentesque urna varius vitae, gravida 
            pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nam viverra euismod odio`,
            date:"November 12, 2016 at 1:38 pm",
            replys:[]
            }
          ]
        },
       {
        id:1,
        user:{username:'Hana',state:"Let's cook",image:"../../../assets/images/comunity/avatar.jpg"},
        comment:`John Doe Reply
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio`,
        date:"November 12, 2016 at 1:38 pm",
        replys:[]
       }
  
      ],
      steps:[{'id':1,'title':'tomato','description':'nnnnnnn','imageUrl':'../../assets/images/cooking method/grill.jpg'},{'id':2,'title':'tttttttt','description':'nnnnnnn','imageUrl':'../../assets/images/cooking method/grill.jpg'},{'id':3,'title':'gggggggggg','description':'nnnnnnn','imageUrl':'../../assets/images/cooking method/grill.jpg'}]
    },
    {
      id: 2,
<<<<<<< HEAD
      imageUrl: '../../../assets/images/blog-img-5.jpg',
      title: 'Pan cake',
=======
      imageUrl: '../../../assets/images/cooking method/grill.jpg',
      unit:"us",
      title: 'pasta',
>>>>>>> 4ba39bc4788874a1b82056ccb4b289d57b561bbd
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      imageArr:[ {small: '../../../../assets/images/cooking method/steam.jpg',
      medium: '../../../../assets/images/cooking method/steam.jpg',
      big: '../../../../assets/images/cooking method/steam.jpg'},{
        small: '../../../../assets/images/cooking method/grill.jpg',
        medium: '../../../../assets/images/cooking method/grill.jpg',
        big: '../../../../assets/images/cooking method/grill.jpg'
    },],      
      date:{day:1,month:'jan'},
      author:{username:'Hana',state:'i love cooking',image:"../../../assets/images/comunity/avatar.jpg"},
      UserName:"mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'}],'MINERALS':[{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[{ingredient:{name:"TOMATOO",weight:"17 g"}},{ingredient:{name:"TOMATOO",weight:"17 g"}}],//[{'title':'TOMATOO','weight':'17 g'}],
      comments:[
        {
          id:1,
          user:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/avatar.jpg"},
          comment:`John Doe Reply
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
           gravida pellentesque urna varius vitae, gravida 
          pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Nam viverra euismod odio`,
          date:"November 12, 2016 at 1:38 pm",
          replys:[
            {
            id:1,
            user:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/avatar.jpg"},
            comment:`John Doe Reply
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
             gravida pellentesque urna varius vitae, gravida 
            pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nam viverra euismod odio`,
            date:"November 12, 2016 at 1:38 pm",
            replys:[]
            }
          ]
        },
       {
        id:1,
        user:{username:'Hana',state:"Let's cook",image:"../../../assets/images/comunity/avatar.jpg"},
        comment:`John Doe Reply
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio`,
        date:"November 12, 2016 at 1:38 pm",
        replys:[]
       }
  
      ],
      steps:[{'id':1,'title':'tomato','description':'nnnnnnn','imageUrl':'../../assets/images/cooking method/grill.jpg'},{'id':2,'title':'tttttttt','description':'nnnnnnn','imageUrl':'../../assets/images/cooking method/grill.jpg'},{'id':3,'title':'gggggggggg','description':'nnnnnnn','imageUrl':'../../assets/images/cooking method/grill.jpg'}]
    },

    {
      id: 3,
<<<<<<< HEAD
      imageUrl: '../../../assets/images/blog-img-4.jpg',
      title: 'Shish tawook',
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      date:{day:1,month:'jan'},
      UserName:"mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'}],'MINERALS':[{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[{'title':'TOMATOO','weight':'17 g'}],
      comments:{'imgOfUser':'nnnn','userName':'salah','desc':'hhhhhtttttrrrr','replay':[{'imgOfUser':'lllllllll','userName':'kkkkkk','desc':'kkkkk'}]},
    },  {
      id: 4,
      imageUrl: '../../../assets/images/blog-img-1.jpg',
      title: 'Coleslaw',
=======
      imageUrl: '../../../assets/images/cooking method/grill.jpg',
      unit:"us",
      title: 'pasta',
>>>>>>> 4ba39bc4788874a1b82056ccb4b289d57b561bbd
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      imageArr:[ {small: '../../../../assets/images/cooking method/grill.jpg',
      medium: '../../../../assets/images/cooking method/grill.jpg',
      big: '../../../../assets/images/cooking method/grill.jpg'},{
        small: '../../../../assets/images/cooking method/grill.jpg',
        medium: '../../../../assets/images/cooking method/grill.jpg',
        big: '../../../../assets/images/cooking method/grill.jpg'
    },],
      date:{day:1,month:'jan'},
      author:{username:'Hana',state:'i love cooking',image:"../../../assets/images/comunity/avatar.jpg"},
      UserName:"mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'}],'MINERALS':[{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[],//[{'title':'TOMATOO','weight':'17 g'}],
      comments:[
        {
          id:1,
          user:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/avatar.jpg"},
          comment:`John Doe Reply
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
           gravida pellentesque urna varius vitae, gravida 
          pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Nam viverra euismod odio`,
          date:"November 12, 2016 at 1:38 pm",
          replys:[
            {
            id:1,
            user:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/avatar.jpg"},
            comment:`John Doe Reply
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
             gravida pellentesque urna varius vitae, gravida 
            pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nam viverra euismod odio`,
            date:"November 12, 2016 at 1:38 pm",
            replys:[]
            }
          ]
        },
       {
        id:1,
        user:{username:'Hana',state:"Let's cook",image:"../../../assets/images/comunity/avatar.jpg"},
        comment:`John Doe Reply
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio`,
        date:"November 12, 2016 at 1:38 pm",
        replys:[]
       }
  
      ],
      steps:[{'id':1,'title':'tomato','description':'nnnnnnn','imageUrl':'../../assets/images/cooking method/grill.jpg'},{'id':2,'title':'tttttttt','description':'nnnnnnn','imageUrl':'../../assets/images/cooking method/grill.jpg'},{'id':3,'title':'gggggggggg','description':'nnnnnnn','imageUrl':'../../assets/images/cooking method/grill.jpg'}]
    }
  ];
 public RecipeIngrediant:IRecipeIngredient[]=[];

  constructor(public userService: UserService) { }
  public getAll(): Observable<IRecipe[]> {
    return of(this.Recipes);
  }
  GetbyId(id : number)
  {
  
    return this.Recipes.find(function(element){
      return element.id == id;
    })
  }
<<<<<<< HEAD
  public DeleteItem(id:number) {
    const index = this. Recipes.findIndex(a => a.id === id);
    if (index > -1) {
      this. Recipes.splice(index, 1);
    }
  }
  DeleteAll() {
    let len = this.Recipes.length;
    this.Recipes.splice(0, len);
=======

  AddRecipe(recipe:IRecipe)
  {
    this.Recipes.push(recipe);
>>>>>>> 4ba39bc4788874a1b82056ccb4b289d57b561bbd
  }
}

