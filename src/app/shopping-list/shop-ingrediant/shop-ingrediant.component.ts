import { Component, OnInit, Query, Input } from '@angular/core';
import { ShopIngrediantService } from '../../shared/services/ShopIngrediant.service';
import { IShopIngrediant } from '../../shared/models/interfaces/IShopIngrediant';
import { ICategory } from '../../shared/models/interfaces/ICategory';
import { ShopCategoryService } from '../../shared/services/ShopCategory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-ingrediant',
  templateUrl: './shop-ingrediant.component.html',
  styleUrls: ['./shop-ingrediant.component.css']
})
export class ShopIngrediantComponent implements OnInit {
  public ingrediants: IShopIngrediant[];
  public categories: ICategory[];
  @Input() public item:ICategory;
 // private id :number;
  active:number
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private shopingredservice: ShopIngrediantService,
     private shopcategoryservice: ShopCategoryService) { 
  //     this.ActivatedRoute.params.subscribe(
  //     (params)=>{this.id = params['id'];
  //    this.item= this.shopcategoryservice.getByIndex(this.id);
  //  }
  //     );
     }

  ngOnInit() {
    this.shopingredservice.getAll().subscribe(
      (data) => {
        this.ingrediants = data;
      }
    );

    this.shopcategoryservice.getAll().subscribe(
      (data) => {
        this.categories = data;
      }
    );
   
  }
  onClick(index: number) {
    this.active = index;
  }
}
