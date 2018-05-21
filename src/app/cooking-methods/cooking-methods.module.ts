import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookingMethodItemComponent } from './cooking-method-item/cooking-method-item.component';
import { CookingMethodListingComponent } from './cooking-method-listing/cooking-method-listing.component';
import { CookingMethodAddComponent } from './cooking-method-add/cooking-method-add.component';
import { CookingMethodDetailsComponent } from './cooking-method-details/cooking-method-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CookingMethodItemComponent, CookingMethodListingComponent, CookingMethodAddComponent,
    CookingMethodDetailsComponent
]
})
export class CookingMethodsModule { }
