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
      imageUrl: '../../assets/images/cooking method/grill.jpg',
      title: 'pasta',
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
      imageUrl: '../../../assets/images/cooking method/grill.jpg',
      title: 'pasta',
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      date:{day:1,month:'jan'},
      UserName:"mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'}],'MINERALS':[{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[{'title':'TOMATOO','weight':'17 g'}],
      comments:{'imgOfUser':'nnnn','userName':'salah','desc':'hhhhhtttttrrrr','replay':[{'imgOfUser':'lllllllll','userName':'kkkkkk','desc':'kkkkk'}]}
    },
    {
      id: 3,
      imageUrl: '../../../assets/images/cooking method/grill.jpg',
      title: 'pasta',
      description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
      date:{day:1,month:'jan'},
      UserName:"mo salah",
      nutritions:{'VITAMINS':[{title:'A','percent':'25%'}],'MINERALS':[{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
      ingredients:[{'title':'TOMATOO','weight':'17 g'}],
      comments:{'imgOfUser':'nnnn','userName':'salah','desc':'hhhhhtttttrrrr','replay':[{'imgOfUser':'lllllllll','userName':'kkkkkk','desc':'kkkkk'}]},
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
