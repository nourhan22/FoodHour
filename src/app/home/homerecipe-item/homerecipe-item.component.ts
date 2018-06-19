import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../../shared/models/interfaces/IRecipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../shared/services/Recipe.service';
import { FavouriteItemsService } from '../../shared/services/favouriteItems.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-homerecipe-item',
  templateUrl: './homerecipe-item.component.html',
  styleUrls: ['./homerecipe-item.component.css']
})
export class HomerecipeItemComponent implements OnInit {
  public favItem: IRecipe;
  public id: number;
  public liked: false;
  @Input() public item: any;
  constructor(public userService: UserService, private favouriteItemsService: FavouriteItemsService, private RecipeService: RecipeService, private router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(

      (params) => {
        debugger;
        this.id = params['id'];

      }
    )
  }

  onClick(id: number) {
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
  onDelete(id: number) {
    this.RecipeService.DeleteItem(id);
  }
  onRemove(id: number) {
    this.favouriteItemsService.RemoveFavItem(id);
  }
}
