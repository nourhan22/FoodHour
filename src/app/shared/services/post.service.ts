import { Injectable } from '@angular/core';
import { IPost } from 'src/app/shared/models/interfaces/IPost';
import { ISmallPost } from 'src/app/shared/models/interfaces/ISmallPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
posts:IPost[]=[
  {
    id:1,
    author:{username:'Hana',state:'i love cooking',image:"../../../assets/images/comunity/avatar.jpg"},
    title:"great food",
    image:"../../../assets/images/comunity/blog-image-1.jpg",
    content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum
    nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec
    tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi,
    non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus
    orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla.
    Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet
    dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo
    justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius
    sit amet hendrerit id, egestas quis mauris.`,
    day:10,
    month:"Jun",
   
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

    ]
  },
  {
    id:2,
    author:{username:'John',state:"Let's cook",image:"../../../assets/images/comunity/avatar.jpg"},    
    title:"tasty recipes",
    image:"../../../assets/images/comunity/blog-image-1.jpg",
    content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus, rutrum sit amet placerat et, bibendum
    nec mauris. Duis molestie, purus eget placerat viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec
    tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi,
    non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus
    orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla.
    Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet
    dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo
    justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius
    sit amet hendrerit id, egestas quis mauris.`,
    day:24,
    month:"May",
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
        replys:[]
      }
    ]
  }
];

popularPots:ISmallPost[]=[
  {
    id:1,
    title:"Nullam Vitae Nibh Un Odiosters",
    image:"../../../assets/images/comunity/blog-thumb-1.jpg",
    date:"Jan 10, 2016"
  },
  {
    id:2,
    title:"how to cook fish?",
    image:"../../../assets/images/comunity/blog-thumb-1.jpg",
    date:"Feb 15, 2014"
  },
  {
    id:3,
    title:"how to cook meat?",
    image:"../../../assets/images/comunity/blog-thumb-1.jpg",
    date:"Aug 20, 2016"
  }
];
recentPosts:ISmallPost[]=[
  {
    id:1,
    title:"Nullam Vitae Nibh Un Odiosters",
    image:"../../../assets/images/comunity/blog-thumb-1.jpg",
    date:"Nov 6, 2013"
  },
  {
    id:2,
    title:"How to make chocolate sauce?",
    image:"../../../assets/images/comunity/blog-thumb-1.jpg",
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

}
