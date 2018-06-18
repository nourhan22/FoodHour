import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShopIngrediantComponent } from './shop-ingrediant/shop-ingrediant.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShoppingCartComponent,
    ShopIngrediantComponent
]
})
export class ShoppingListModule { }
