import { RecipeService } from 'src/app/shared/services/Recipe.service';
//import { FavouriteItemsService, FavouriteItem } from './../../shared/services/favouriteItems.service';
import { IUser } from './../../shared/models/interfaces/IUser';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import {IRecipe} from 'src/app/shared/models/interfaces/IRecipe';
import { Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FavouriteItemsService } from '../../shared/services/favouriteItems.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  public favItem : IRecipe;
 public id:number;
 public liked:false;
  @Input()public item:any;
 
  constructor(public userService:UserService,private favouriteItemsService:FavouriteItemsService,private RecipeService:RecipeService,private router:Router, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // this.favItem = {
    //   Recipes:[{
    //     id: 1,
    //     imageUrl: '../../assets/images/cooking method/grill.jpg',
    //     title: 'pasta',
    //     description: '" The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes',
    //     date:{day:2,month:'jan'},
    //     UserName:"Mo salah",
    //     nutritions:{'VITAMINS':[{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'o','percent':'25%'}],
    //     'MINERALS':[{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'},{title:'A','percent':'25%'}],'Cal':[{title:'calories','percent':'25%'},{title:'fat','percent':'25%'},{title:'saturation','percent':'25%'},{title:'sugars','percent':'25%'},{title:'salt','percent':'25%'}]},
    //     ingredients:[{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'},{'title':'TOMATOO','weight':'17 g'}],
    //     comments:{'imgOfUser':'nnnn','userName':'salah','desc':'hhhhhtttttrrrr','replay':[{'imgOfUser':'lllllllll','userName':'kkkkkk','desc':'kkkkk'}]}
    //   }]
    //}

    this.ActivatedRoute.params.subscribe(

      (params) => {
        debugger;
        this.id = params['id'];
        // if (this.id != null) {
        //   debugger;
        //   this.favItem  = this.favouriteItemsService.GetbyId(this.id);
        //   this.isEdit = true;
        // }
      }
    )
  }
  onClick(id:number){
    //debugger;
    
  //  if(!this.liked)
   // {
      this.favouriteItemsService.AddToFavs(this.item);
      this.router.navigate(['UserDetails/:id']);
   // }
    // else{
    //   this.favouriteItemsService.DeleteItem(this.id);
    //   this.router.navigate(['UserDetails/:id']); 
    // }
    
   
  }
   onDelete(id:number)
   {
     this.RecipeService.DeleteItem(id);   
}
onRemove(id:number){
  this.favouriteItemsService.RemoveFavItem(id);
}
}
