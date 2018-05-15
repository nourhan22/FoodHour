import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuttingMethodAddComponent } from './cutting-method-add/cutting-method-add.component';
import { CuttingMethodItemComponent } from './cutting-method-item/cutting-method-item.component';
import { CuttingMethodListingComponent } from './cutting-method-listing/cutting-method-listing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CuttingMethodAddComponent, CuttingMethodItemComponent, CuttingMethodListingComponent]
})
export class CuttingMethodsModule { }
