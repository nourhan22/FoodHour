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
  favourites: IRecipe[];
  public onRecipeIngredientAdded = new Subject<IRecipeIngredient>();
  public Recipes: IRecipe[] = [
    {
      id: 1,
      imageUrl: '../../assets/images/dd.jpg',
      title: 'Panne',
      description: ' chicken recipe using Zatarain’s Crispy Southern Chicken Frying Mix, sprinkled with Parmesan cheese. Serve as is, on a bed of salad',
      imageArr:[ {small: '../../../../assets/images/cooking method/steam.jpg',
      medium: '../../../../assets/images/cooking method/steam.jpg',
      big: '../../../../assets/images/cooking method/steam.jpg'},
      {
        small: '../../../../assets/images/cooking method/grill.jpg',
        medium: '../../../../assets/images/cooking method/grill.jpg',
        big: '../../../../assets/images/cooking method/grill.jpg'
      }],
      date: { day: 2, month: 'jan' },
      author: { username: 'Hana', state: 'i love cooking', image: "../../../assets/images/comunity/avatar.jpg" },
      UserName: "Mo salah",
      nutritions: {
        'VITAMINS': [{ title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'o', 'percent': '25%' }],
        'MINERALS': [{ title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }], 'Cal': [{ title: 'calories', 'percent': '25%' }, { title: 'fat', 'percent': '25%' }, { title: 'saturation', 'percent': '25%' }, { title: 'sugars', 'percent': '25%' }, { title: 'salt', 'percent': '25%' }]
      },
      ingredients: [{ ingredient: { name: "TOMATOO", weight: "17 g" } }, { ingredient: { name: "TOMATOO", weight: "17 g" } }],//[{'title':'TOMATOO','weight':'17 g'}],
      comments: [
        {
          id: 1,
          user: { username: 'John', state: "Let's cook", image: "../../../assets/images/comunity/avatar.jpg" },
          comment: `John Doe Reply
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
           gravida pellentesque urna varius vit    mmmmmmmmmae, gravida 
          pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Nam viverra euismod odio`,
          date: "November 12, 2016 at 1:38 pm",
          replys: [
            {
              id: 1,
              user: { username: 'John', state: "Let's cook", image: "../../../assets/images/comunity/avatar.jpg" },
              comment: `John Doe Reply
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
             gravida pellentesque urna varius vitae, gravida 
            pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nam viverra euismod odio`,
              date: "November 12, 2016 at 1:38 pm",
              replys: []
            }
          ]
        },],



      steps: [{ 'id': 1, 'title': 'tomato', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }, { 'id': 2, 'title': 'tttttttt', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }, { 'id': 3, 'title': 'gggggggggg', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }]
    },
    {
      id: 2,
      imageUrl: '../../../assets/images/blog-img-5.jpg',
      title: 'Pan cake',
      description: ' This is the perfect pancake recipe. They are light, fluffy, and only require simple ingredients that you probably already have on hand in your kitchen.',
      imageArr:[ {small: '../../../../assets/images/cooking method/steam.jpg',
      medium: '../../../../assets/images/cooking method/steam.jpg',
      big: '../../../../assets/images/cooking method/steam.jpg'},{
        small: '../../../../assets/images/cooking method/grill.jpg',
        medium: '../../../../assets/images/cooking method/grill.jpg',
        big: '../../../../assets/images/cooking method/grill.jpg'
      }],
      date: { day: 2, month: 'jan' },
      author: { username: 'Hana', state: 'i love cooking', image: "../../../assets/images/comunity/avatar.jpg" },
      UserName: "Mo salah",
      nutritions: {
        'VITAMINS': [{ title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'o', 'percent': '25%' }],
        'MINERALS': [{ title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }], 'Cal': [{ title: 'calories', 'percent': '25%' }, { title: 'fat', 'percent': '25%' }, { title: 'saturation', 'percent': '25%' }, { title: 'sugars', 'percent': '25%' }, { title: 'salt', 'percent': '25%' }]
      },
      ingredients: [{ ingredient: { name: "TOMATOO", weight: "17 g" } }, { ingredient: { name: "TOMATOO", weight: "17 g" } }],//[{'title':'TOMATOO','weight':'17 g'}],
      comments: [
        {
          id: 1,
          user: { username: 'John', state: "Let's cook", image: "../../../assets/images/comunity/avatar.jpg" },
          comment: `John Doe Reply
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
         gravida pellentesque urna varius vit    mmmmmmmmmae, gravida 
        pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Nam viverra euismod odio`,
          date: "November 12, 2016 at 1:38 pm",
          replys: [
            {
              id: 1,
              user: { username: 'John', state: "Let's cook", image: "../../../assets/images/comunity/avatar.jpg" },
              comment: `John Doe Reply
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
           gravida pellentesque urna varius vitae, gravida 
          pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Nam viverra euismod odio`,
              date: "November 12, 2016 at 1:38 pm",
              replys: []
            }
          ]
        },],



      steps: [{ 'id': 1, 'title': 'tomato', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }, { 'id': 2, 'title': 'tttttttt', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }, { 'id': 3, 'title': 'gggggggggg', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }]
    },
    {
      id: 3,
      imageUrl: '../../assets/images/blog-img-4.jpg',
      title: 'Shish tawook',
      description: 'These are served in every restaurant in the Middle East.You can easily make them at home and make them taste just as good.',
      imageArr: [{
        small: '../../../../assets/images/cooking method/steam.jpg',
        medium: '../../../../assets/images/cooking method/steam.jpg',
        big: '../../../../assets/images/cooking method/steam.jpg'
      }, {
        small: '../../../../assets/images/cooking method/grill.jpg',
        medium: '../../../../assets/images/cooking method/grill.jpg',
        big: '../../../../assets/images/cooking method/grill.jpg'
      }],
      date: { day: 2, month: 'jan' },
      author: { username: 'Hana', state: 'i love cooking', image: "../../../assets/images/comunity/avatar.jpg" },
      UserName: "Mo salah",
      nutritions: {
        'VITAMINS': [{ title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'o', 'percent': '25%' }],
        'MINERALS': [{ title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }], 'Cal': [{ title: 'calories', 'percent': '25%' }, { title: 'fat', 'percent': '25%' }, { title: 'saturation', 'percent': '25%' }, { title: 'sugars', 'percent': '25%' }, { title: 'salt', 'percent': '25%' }]
      },
      ingredients: [{ ingredient: { name: "TOMATOO", weight: "17 g" } }, { ingredient: { name: "TOMATOO", weight: "17 g" } }],//[{'title':'TOMATOO','weight':'17 g'}],
      comments: [
        {
          id: 1,
          user: { username: 'John', state: "Let's cook", image: "../../../assets/images/comunity/avatar.jpg" },
          comment: `John Doe Reply
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
       gravida pellentesque urna varius vit    mmmmmmmmmae, gravida 
      pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Nam viverra euismod odio`,
          date: "November 12, 2016 at 1:38 pm",
          replys: [
            {
              id: 1,
              user: { username: 'John', state: "Let's cook", image: "../../../assets/images/comunity/avatar.jpg" },
              comment: `John Doe Reply
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
         gravida pellentesque urna varius vitae, gravida 
        pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Nam viverra euismod odio`,
              date: "November 12, 2016 at 1:38 pm",
              replys: []
            }
          ]
        },],



      steps: [{ 'id': 1, 'title': 'tomato', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }, { 'id': 2, 'title': 'tttttttt', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }, { 'id': 3, 'title': 'gggggggggg', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }]
    },
    {
      id: 4,
      imageUrl: '../../assets/images/colslaw.jpg',
      title: 'Coleslaw',
      description: 'A creamy coleslaw dressing that can be made with ingredients you already have! You can pour it immediately over coleslaw or refrigerate until needed.',
      imageArr: [{
        small: '../../../../assets/images/cooking method/steam.jpg',
        medium: '../../../../assets/images/cooking method/steam.jpg',
        big: '../../../../assets/images/cooking method/steam.jpg'
      }, {
        small: '../../../../assets/images/cooking method/grill.jpg',
        medium: '../../../../assets/images/cooking method/grill.jpg',
        big: '../../../../assets/images/cooking method/grill.jpg'
      }],
      date: { day: 2, month: 'jan' },
      author: { username: 'Hana', state: 'i love cooking', image: "../../../assets/images/comunity/avatar.jpg" },
      UserName: "Mo salah",
      nutritions: {
        'VITAMINS': [{ title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'o', 'percent': '25%' }],
        'MINERALS': [{ title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }, { title: 'A', 'percent': '25%' }], 'Cal': [{ title: 'calories', 'percent': '25%' }, { title: 'fat', 'percent': '25%' }, { title: 'saturation', 'percent': '25%' }, { title: 'sugars', 'percent': '25%' }, { title: 'salt', 'percent': '25%' }]
      },
      ingredients: [{ ingredient: { name: "TOMATOO", weight: "17 g" } }, { ingredient: { name: "TOMATOO", weight: "17 g" } }],//[{'title':'TOMATOO','weight':'17 g'}],
      comments: [
        {
          id: 1,
          user: { username: 'John', state: "Let's cook", image: "../../../assets/images/comunity/avatar.jpg" },
          comment: `John Doe Reply
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
       gravida pellentesque urna varius vit    mmmmmmmmmae, gravida 
      pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Nam viverra euismod odio`,
          date: "November 12, 2016 at 1:38 pm",
          replys: [
            {
              id: 1,
              user: { username: 'John', state: "Let's cook", image: "../../../assets/images/comunity/avatar.jpg" },
              comment: `John Doe Reply
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
         gravida pellentesque urna varius vitae, gravida 
        pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Nam viverra euismod odio`,
              date: "November 12, 2016 at 1:38 pm",
              replys: []
            }
          ]
        },],



      steps: [{ 'id': 1, 'title': 'tomato', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }, { 'id': 2, 'title': 'tttttttt', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }, { 'id': 3, 'title': 'gggggggggg', 'description': 'nnnnnnn', 'imageUrl': '../../assets/images/cooking method/grill.jpg' }]
    }
    
  ];
  public RecipeIngrediant: IRecipeIngredient[] = [];

  constructor(public userService: UserService) { }
  public getAll(): Observable<IRecipe[]> {
    return of(this.Recipes);
  }
  GetbyId(id: number) {

    return this.Recipes.find(function (element) {
      return element.id == id;
    })
  }
  public DeleteItem(id: number) {
    const index = this.Recipes.findIndex(a => a.id === id);
    if (index > -1) {
      this.Recipes.splice(index, 1);
    }
  }
  DeleteAll() {
    let len = this.Recipes.length;
    this.Recipes.splice(0, len);
  }
    AddRecipe(recipe: IRecipe)
    {
      this.Recipes.push(recipe);
    }

    SearchInRecipes(txtSearch: string) {
      let filteredArr = this.Recipes.filter(function (ele) {
        return ele.title.toLowerCase().includes(txtSearch.toLowerCase());
      })
  
      return filteredArr;
    }
  }
