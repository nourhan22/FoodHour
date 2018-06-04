import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListingComponent } from './shop-listing/shop-listing.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShopListingComponent,
    ShopItemComponent
]
})
export class ShoppingListModule { }
