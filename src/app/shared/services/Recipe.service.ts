import { Injectable } from '@angular/core';
import { IRecipe } from 'src/app/shared/models/interfaces/IRecipe';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public Recipes: IRecipe[] = [
    {
      id: 1,
      imageUrl: '../../../../assets/images/cooking method/grill.jpg',
      title: 'pasta',
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      imageArr:['../assets/images/cooking method/grill.jpg','../../assets/images/cooking method/grill.jpg'],
      date:{day:2,month:'jan'},
      author:{username:'Hana',state:'i love cooking',image:"../../../assets/images/comunity/avatar.jpg"},
      UserName:"Mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'o','percent':'25%'}],
      'MINERALS':[{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'}],
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
      imageUrl: '../../../assets/images/cooking method/grill.jpg',
      title: 'pasta',
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      imageArr:['../../assets/images/cooking method/grill.jpg','../../assets/images/cooking method/grill.jpg'],      
      date:{day:1,month:'jan'},
      author:{username:'Hana',state:'i love cooking',image:"../../../assets/images/comunity/avatar.jpg"},
      UserName:"mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'}],'MINERALS':[{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[{'title':'TOMATOO','weight':'17 g'}],
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
      imageUrl: '../../../assets/images/cooking method/grill.jpg',
      title: 'pasta',
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      imageArr:['../../assets/images/cooking method/grill.jpg','../../assets/images/cooking method/grill.jpg'],
      date:{day:1,month:'jan'},
      author:{username:'Hana',state:'i love cooking',image:"../../../assets/images/comunity/avatar.jpg"},
      UserName:"mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'}],'MINERALS':[{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[{'title':'TOMATOO','weight':'17 g'}],
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

  constructor() { }
  public getAll(): Observable<IRecipe[]> {
    return of(this.Recipes);
  }
  GetbyId(id : number)
  {
  
    return this.Recipes.find(function(element){
      return element.id == id;
    })
  }
}
