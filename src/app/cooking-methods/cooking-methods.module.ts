import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookingMethodItemComponent } from './cooking-method-item/cooking-method-item.component';
import { CookingMethodListingComponent } from './cooking-method-listing/cooking-method-listing.component';
import { CookingMethodAddComponent } from './cooking-method-add/cooking-method-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CookingMethodItemComponent, CookingMethodListingComponent, CookingMethodAddComponent]
})
export class CookingMethodsModule { }
