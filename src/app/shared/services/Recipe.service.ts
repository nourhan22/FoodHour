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
      imageUrl: '../../assets/images/recipe/pancakes.jpg',
      title: 'Fluffy Pancake',
      description: ' Tall and fluffy. These pancakes are just right. Topped with strawberries and whipped cream, they are impossible to resist.',
      imageArr: [{
        small: '../../assets/images/recipe/pancakes.jpg',
        medium: '../../assets/images/recipe/pancakes.jpg',
        big: '../../assets/images/recipe/pancakes.jpg'
      },
      {
        small: '../../assets/images/recipe/flour.jpg',
        medium: '../../assets/images/recipe/flour.jpg',
        big: '../../assets/images/recipe/flour.jpg'
      },
      {
        small: '../../assets/images/recipe/strawberry.jpg',
        medium: '../../assets/images/recipe/strawberry.jpg',
        big: '../../assets/images/recipe/strawberry.jpg'
      },
      {
        small: '../../assets/images/recipe/download.jpg',
        medium: '../../assets/images/recipe/download.jpg',
        big: '../../assets/images/recipe/download.jpg'
      }
      ],
      date: { day: 2, month: 'jan' },
      author: { username: 'Hana', state: 'i love cooking', image: "../../../assets/images/recipe/person1.png" },
      UserName: "nayera saad",
      nutritions: {
        'VITAMINS': [{ title: 'A', 'percent': '3%' }, { title: 'B12', 'percent': '5%' }, { title: 'c', 'percent': '3.5%' }, { title: 'D', 'percent': '5%' }],
        'MINERALS': [{ title: 'Na', 'percent': '4%' }, { title: 'Z', 'percent': '5%' }, { title: 'K', 'percent': '3%' }], 'Cal': [{ title: 'calories', 'percent': '3%' }, { title: 'fat', 'percent': '5%' }, { title: 'saturation', 'percent': '2%' }, { title: 'sugars', 'percent': '6%' }, { title: 'salt', 'percent': '8%' }]
      },
      ingredients: [{ ingredient: { name: "teaspoon baking soda", weight: "1/2" } }, { ingredient: { name: "teaspoon salt", weight: "1/2" } }, { ingredient: { name: "egg", weight: "1" } }, { ingredient: { name: "tablespoons butter, melted", weight: "2" } }, { ingredient: { name: "cooking spray", weight: "1/2" } }, { ingredient: { name: "cup  flour", weight: "2" } }, { ingredient: { name: "tablespoons white vinegar", weight: "2" } }, { ingredient: { name: "cup milk", weight: "2" } }],//[{'title':'TOMATOO','weight':'17 g'}],
      comments: [
        {
          id: 1,
          user: { username: 'John', state: "Let's cook", image: "../../../assets/images/recipe/person1.png" },
          comment: `John Doe Reply
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
           gravida pellentesque urna varius vit    mmmmmmmmmae, gravida 
          pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Nam viverra euismod odio`,
          date: "November 12, 2016 at 1:38 pm",
          replys: [
            {
              id: 1,
              user: { username: 'John', state: "Let's cook", image: "../../../assets/images/recipe/person1.png" },
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
      steps: [{ 'id': 1, 'title': 'adding flour', 'description': 'Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into "soured" milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.', 'imageUrl': '../../assets/images/recipe/flour.jpg' }, { 'id': 2, 'title': 'combine with milk', 'description': 'Combine milk with vinegar in a medium bowl and set aside for 5 minutes to "sour".', 'imageUrl': '../../assets/images/recipe/milk.jpg' }, { 'id': 3, 'title': 'cook pancake', 'description': 'Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side.', 'imageUrl': '../../assets/images/recipe/t.jpg' }]
    },
    {
      id: 2,
      imageUrl: '../../assets/images/recipe/lazaneea.jpg',
      title: 'World s Best Lasagna',
      description: 'It takes a little work, but it is worth it.',
      imageArr: [{
        small: '../../assets/images/recipe/lazaneea.jpg',
        medium: '../../assets/images/recipe/lazaneea.jpg',
        big: '../../assets/images/recipe/lazaneea.jpg'
      },
      {
        small: '../../assets/images/recipe/meet.jpg',
        medium: '../../assets/images/recipe/meet.jpg',
        big: '../../assets/images/recipe/meet.jpg'
      },
      {
        small: '../../assets/images/recipe/ss.jpg',
        medium: '../../assets/images/recipe/ss.jpg',
        big: '../../assets/images/recipe/ss.jpg'
      },
      {
        small: '../../assets/images/recipe/lazan.jpg',
        medium: '../../assets/images/recipe/lazan.jpg',
        big: '../../assets/images/recipe/lazan.jpg'
      }
      ],
      date: { day: 2, month: 'jan' },
      author: { username: 'Hana', state: 'i love cooking', image: "../../../assets/images/recipe/person1.png" },
      UserName: "nayera saad",
      nutritions: {
        'VITAMINS': [{ title: 'A', 'percent': '3%' }, { title: 'B12', 'percent': '5%' }, { title: 'c', 'percent': '3.5%' }, { title: 'D', 'percent': '5%' }],
        'MINERALS': [{ title: 'Na', 'percent': '4%' }, { title: 'Z', 'percent': '5%' }, { title: 'K', 'percent': '3%' }], 'Cal': [{ title: 'calories', 'percent': '3%' }, { title: 'fat', 'percent': '5%' }, { title: 'saturation', 'percent': '2%' }, { title: 'sugars', 'percent': '6%' }, { title: 'salt', 'percent': '8%' }]
      },
      ingredients: [{ ingredient: { name: "teaspoon baking soda", weight: "1/2" } }, { ingredient: { name: "teaspoon salt", weight: "1/2" } }, { ingredient: { name: "egg", weight: "1" } }, { ingredient: { name: "tablespoons butter, melted", weight: "2" } }, { ingredient: { name: "cooking spray", weight: "1/2" } }, { ingredient: { name: "cup  flour", weight: "2" } }, { ingredient: { name: "tablespoons white vinegar", weight: "2" } }, { ingredient: { name: "cup milk", weight: "2" } }],//[{'title':'TOMATOO','weight':'17 g'}],
      comments: [
        {
          id: 1,
          user: { username: 'John', state: "Let's cook", image: "../../../assets/images/recipe/person1.png" },
          comment: `John Doe Reply
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
           gravida pellentesque urna varius vit    mmmmmmmmmae, gravida 
          pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Nam viverra euismod odio`,
          date: "November 12, 2016 at 1:38 pm",
          replys: [
            {
              id: 1,
              user: { username: 'John', state: "Let's cook", image: "../../../assets/images/recipe/person1.png" },
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
      steps: [{ 'id': 1, 'title': 'preparing meet', 'description': 'Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into "soured" milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.', 'imageUrl': '../../assets/images/recipe/meet.jpg' }, { 'id': 2, 'title': 'combine with lazannea', 'description': 'Combine milk with vinegar in a medium bowl and set aside for 5 minutes to "sour".', 'imageUrl': '../../assets/images/recipe/lazan.jpg' }, { 'id': 3, 'title': 'tomato sause', 'description': 'Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side.', 'imageUrl': '../../assets/images/recipe/ss.jpg' }]
    },
    {
      id: 1,
      imageUrl: '../../assets/images/recipe/pancakes.jpg',
      title: 'Fluffy Pancake',
      description: ' chicken recipe using Zatarain’s Crispy Southern Chicken Frying Mix, sprinkled with Parmesan cheese. Serve as is, on a bed of salad',
      imageArr: [{
        small: '../../assets/images/recipe/pancakes.jpg',
        medium: '../../assets/images/recipe/pancakes.jpg',
        big: '../../assets/images/recipe/pancakes.jpg'
      },
      {
        small: '../../assets/images/recipe/flour.jpg',
        medium: '../../assets/images/recipe/flour.jpg',
        big: '../../assets/images/recipe/flour.jpg'
      },
      {
        small: '../../assets/images/recipe/strawberry.jpg',
        medium: '../../assets/images/recipe/strawberry.jpg',
        big: '../../assets/images/recipe/strawberry.jpg'
      },
      {
        small: '../../assets/images/recipe/download.jpg',
        medium: '../../assets/images/recipe/download.jpg',
        big: '../../assets/images/recipe/download.jpg'
      }
      ],
      date: { day: 2, month: 'jan' },
      author: { username: 'Hana', state: 'i love cooking', image: "../../../assets/images/comunity/avatar.jpg" },
      UserName: "nayera saad",
      nutritions: {
        'VITAMINS': [{ title: 'A', 'percent': '3%' }, { title: 'B12', 'percent': '5%' }, { title: 'c', 'percent': '3.5%' }, { title: 'D', 'percent': '5%' }],
        'MINERALS': [{ title: 'Na', 'percent': '4%' }, { title: 'Z', 'percent': '5%' }, { title: 'K', 'percent': '3%' }], 'Cal': [{ title: 'calories', 'percent': '3%' }, { title: 'fat', 'percent': '5%' }, { title: 'saturation', 'percent': '2%' }, { title: 'sugars', 'percent': '6%' }, { title: 'salt', 'percent': '8%' }]
      },
      ingredients: [{ ingredient: { name: "teaspoon baking soda", weight: "1/2" } }, { ingredient: { name: "teaspoon salt", weight: "1/2" } }, { ingredient: { name: "egg", weight: "1" } }, { ingredient: { name: "tablespoons butter, melted", weight: "2" } }, { ingredient: { name: "cooking spray", weight: "1/2" } }, { ingredient: { name: "cup  flour", weight: "2" } }, { ingredient: { name: "tablespoons white vinegar", weight: "2" } }, { ingredient: { name: "cup milk", weight: "2" } }],//[{'title':'TOMATOO','weight':'17 g'}],
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
      steps: [{ 'id': 1, 'title': 'adding flour', 'description': 'Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into "soured" milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.', 'imageUrl': '../../assets/images/recipe/flour.jpg' }, { 'id': 2, 'title': 'combine with milk', 'description': 'Combine milk with vinegar in a medium bowl and set aside for 5 minutes to "sour".', 'imageUrl': '../../assets/images/recipe/milk.jpg' }, { 'id': 3, 'title': 'cook pancake', 'description': 'Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side.', 'imageUrl': '../../assets/images/recipe/t.jpg' }]
    },
    {
      id: 4,
      imageUrl: '../../assets/images/recipe/lazaneea.jpg',
      title: 'World s Best Lasagna',
      description: 'It takes a little work, but it is worth it.',
      imageArr: [{
        small: '../../assets/images/recipe/lazaneea.jpg',
        medium: '../../assets/images/recipe/lazaneea.jpg',
        big: '../../assets/images/recipe/lazaneea.jpg'
      },
      {
        small: '../../assets/images/recipe/meet.jpg',
        medium: '../../assets/images/recipe/meet.jpg',
        big: '../../assets/images/recipe/meet.jpg'
      },
      {
        small: '../../assets/images/recipe/ss.jpg',
        medium: '../../assets/images/recipe/ss.jpg',
        big: '../../assets/images/recipe/ss.jpg'
      },
      {
        small: '../../assets/images/recipe/lazan.jpg',
        medium: '../../assets/images/recipe/lazan.jpg',
        big: '../../assets/images/recipe/lazan.jpg'
      }
      ],
      date: { day: 2, month: 'jan' },
      author: { username: 'Hana', state: 'i love cooking', image: "../../../assets/images/recipe/person1.png" },
      UserName: "nayera saad",
      nutritions: {
        'VITAMINS': [{ title: 'A', 'percent': '3%' }, { title: 'B12', 'percent': '5%' }, { title: 'c', 'percent': '3.5%' }, { title: 'D', 'percent': '5%' }],
        'MINERALS': [{ title: 'Na', 'percent': '4%' }, { title: 'Z', 'percent': '5%' }, { title: 'K', 'percent': '3%' }], 'Cal': [{ title: 'calories', 'percent': '3%' }, { title: 'fat', 'percent': '5%' }, { title: 'saturation', 'percent': '2%' }, { title: 'sugars', 'percent': '6%' }, { title: 'salt', 'percent': '8%' }]
      },
      ingredients: [{ ingredient: { name: "teaspoon baking soda", weight: "1/2" } }, { ingredient: { name: "teaspoon salt", weight: "1/2" } }, { ingredient: { name: "egg", weight: "1" } }, { ingredient: { name: "tablespoons butter, melted", weight: "2" } }, { ingredient: { name: "cooking spray", weight: "1/2" } }, { ingredient: { name: "cup  flour", weight: "2" } }, { ingredient: { name: "tablespoons white vinegar", weight: "2" } }, { ingredient: { name: "cup milk", weight: "2" } }],//[{'title':'TOMATOO','weight':'17 g'}],
      comments: [
        {
          id: 1,
          user: { username: 'John', state: "Let's cook", image: "../../../assets/images/recipe/person1.png" },
          comment: `John Doe Reply
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
           gravida pellentesque urna varius vit    mmmmmmmmmae, gravida 
          pellentesque urna varius vitae. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Nam viverra euismod odio`,
          date: "November 12, 2016 at 1:38 pm",
          replys: [
            {
              id: 1,
              user: { username: 'John', state: "Let's cook", image: "../../../assets/images/recipe/person1.png" },
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
      steps: [{ 'id': 1, 'title': 'preparing meet', 'description': 'Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into "soured" milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.', 'imageUrl': '../../assets/images/recipe/meet.jpg' }, { 'id': 2, 'title': 'combine with lazannea', 'description': 'Combine milk with vinegar in a medium bowl and set aside for 5 minutes to "sour".', 'imageUrl': '../../assets/images/recipe/lazan.jpg' }, { 'id': 3, 'title': 'tomato sause', 'description': 'Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side.', 'imageUrl': '../../assets/images/recipe/ss.jpg' }]
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

  AddRecipe(recipe:IRecipe)
  {
    debugger;
    this.Recipes.push(recipe);
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

  }
}
