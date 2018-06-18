import { Component, OnInit } from '@angular/core';
import { ShopCategoryService } from '../../shared/services/ShopCategory.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shopingcartsevice:ShopCategoryService) { }

  ngOnInit() {
  }

}
