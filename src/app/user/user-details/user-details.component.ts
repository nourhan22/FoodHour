import { IRecipe } from './../../shared/models/interfaces/IRecipe';
import { Observable } from 'rxjs';
//import { FavouriteItems, FavouriteItem, FavouriteItemsService } from './../../shared/services/favouriteItems.service';
import { UserService } from './../../shared/services/user.service';
import { IUser } from './../../shared/models/interfaces/IUser';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteItemsService } from '../../shared/services/favouriteItems.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() public item: IUser;
  public favouriteItems:IRecipe[];
  private id :number;
  
  constructor(private ActivatedRoute:ActivatedRoute,private userService:UserService,private favouriteItemsService:FavouriteItemsService,private router:Router) { 
    this.ActivatedRoute.params.subscribe(
      
      (params)=>{this.id = params['id'];}
    )
    this.item = this.userService.GetbyId(this.id);
  }

  ngOnInit() {
    this.favouriteItemsService.GetAllFavs().subscribe(
      (data)=>{ this.favouriteItems = data; debugger;}
     );
    
  }
  getUrl()
  {
    return "url('../../../assets/images/header.jpg')";
  }

 
}
