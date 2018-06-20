import { Injectable } from '@angular/core';
import { IPost } from 'src/app/shared/models/interfaces/IPost';
import { ISmallPost } from 'src/app/shared/models/interfaces/ISmallPost';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
posts:IPost[]=[
  {
    id:1,
    author:{username:'Hana',state:'i love cooking',image:"../../../assets/images/comunity/userg.png"},
    title:"Chinese food",
    image:"../../../assets/images/comunity/chinees.jpg",
    content:`Chinese food is famous all over the world, but you may be shocked by its surprising range and variety of ingredients if you’ve only eaten in Chinese restaurants abroad. Chinese food has countless delicious and fantastic dishes. And people from different areas have different cuisine types, which can be bland, sweet, salty, spicy, or sour.`,
    day:10,
    month:"Jun",
   
    comments:[
      {
        id:1,
        user:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/userb.png"},
        comment:`great!!!`,
        date:"November 12, 2016 at 1:38 pm",
        replys:[
          {
          id:1,
          user:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/userb.png"},
          comment:`So yummy`,
          date:"November 12, 2016 at 1:38 pm",
          replys:[]
          }
        ]
      },
     {
      id:1,
      user:{username:'Hana',state:"Let's cook",image:"../../../assets/images/comunity/userg.png"},
      comment:`thanks`,
      date:"November 12, 2016 at 1:38 pm",
      replys:[]
     }

    ]
  },
  {
    id:2,
    author:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/userb.png"},    
    title:"Italy food",
    image:"../../../assets/images/comunity/italy.jpg",
    content:`Gorgeous Italy draws travelers keen on exploring her stunning scenery, unique culture, and gastronomical delights. With its rich cuisine, this beautiful Mediterranean land offers countless famous and traditional must-eat foods.

    A multitude of popular Italian delicacies and dishes, sweet and savory, await your discovery during your sojourns when you are in Italy. These traditional Italian dishes are deeply rooted in the Italian culture, and recipes are often passed down between generations and are cherished for their authentic origins...`,
    day:24,
    month:"May",
    comments:[
      {
        id:1,
        user:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/userb.png"},
        comment:`Nice ...`,
        date:"November 12, 2016 at 1:38 pm",
        replys:[]
      }
    ]
  }
];

popularPots:ISmallPost[]=[
  {
    id:1,
    title:"Sweets",
    image:"../../../assets/images/comunity/sweet.jpg",
    date:"Jan 10, 2016"
  },
  {
    id:2,
    title:"How to make chocolate sauce?",
    image:"../../../assets/images/comunity/choco.jpg",
    date:"Feb 15, 2014"
  },
  {
    id:3,
    title:"how to cook meat?",
    image:"../../../assets/images/comunity/meat.jpeg",
    date:"Aug 20, 2016"
  }
];
recentPosts:ISmallPost[]=[
  {
    id:1,
    title:"fruit salad",
    image:"../../../assets/images/comunity/fruit.jpg",
    date:"Nov 6, 2013"
  },
  {
    id:2,
    title:"how to cook fish?",
    image:"../../../assets/images/comunity/fish.jpg",
    date:"Aug 2, 2012"
  }
];
constructor() { }

GetById(id:number)
{
  return this.posts.find(function(element){
    return element.id == id;
  });
}
public getAll():Observable<IPost[]>
{
  return of (this.posts);
}

public AddNewPost(newPost:IPost)
{
  this.posts.push(newPost);
}
}
