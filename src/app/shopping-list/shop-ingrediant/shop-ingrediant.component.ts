import { Component, OnInit } from '@angular/core';
import { ShopIngrediantService } from '../../shared/services/ShopIngrediant.service';
import { IShopIngrediant } from '../../shared/models/interfaces/IShopIngrediant';
import { ICategory } from '../../shared/models/interfaces/ICategory';
import { ShopCategoryService } from '../../shared/services/ShopCategory.service';

@Component({
  selector: 'app-shop-ingrediant',
  templateUrl: './shop-ingrediant.component.html',
  styleUrls: ['./shop-ingrediant.component.css']
})
export class ShopIngrediantComponent implements OnInit {
  public ingrediants: IShopIngrediant[];
  public categories: ICategory[];
  constructor(private shopingredservice: ShopIngrediantService, private shopcategoryservice: ShopCategoryService) { }

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

}
