import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { IRecipe } from 'src/app/shared/models/interfaces/IRecipe';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  favourites:IRecipe[];
  public Recipes: IRecipe[] = [
    {
      id: 1,
      imageUrl: '../../assets/images/dd.jpg',
      title: 'Panee',
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      date:{day:2,month:'jan'},
      UserName:"Mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'o','percent':'25%'}],
      'MINERALS':[{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'}],
      comments:{'imgOfUser':'nnnn','userName':'salah','desc':'hhhhhtttttrrrr','replay':[{'imgOfUser':'lllllllll','userName':'kkkkkk','desc':'kkkkk'}]}
    },
    {
      id: 2,
      imageUrl: '../../../assets/images/blog-img-5.jpg',
      title: 'Pan cake',
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      date:{day:1,month:'jan'},
      UserName:"mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'}],'MINERALS':[{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[{'title':'TOMATOO','weight':'17 g'}],
      comments:{'imgOfUser':'nnnn','userName':'salah','desc':'hhhhhtttttrrrr','replay':[{'imgOfUser':'lllllllll','userName':'kkkkkk','desc':'kkkkk'}]}
    },

    {
      id: 3,
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
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      date:{day:1,month:'jan'},
      UserName:"mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'}],'MINERALS':[{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[{'title':'TOMATOO','weight':'17 g'}],
      comments:{'imgOfUser':'nnnn','userName':'salah','desc':'hhhhhtttttrrrr','replay':[{'imgOfUser':'lllllllll','userName':'kkkkkk','desc':'kkkkk'}]},
    }
  ];

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
  public DeleteItem(id:number) {
    const index = this. Recipes.findIndex(a => a.id === id);
    if (index > -1) {
      this. Recipes.splice(index, 1);
    }
  }
  DeleteAll() {
    let len = this.Recipes.length;
    this.Recipes.splice(0, len);
  }
}

