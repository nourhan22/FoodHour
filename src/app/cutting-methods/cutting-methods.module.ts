import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuttingMethodAddComponent } from './cutting-method-add/cutting-method-add.component';
import { CuttingMethodItemComponent } from './cutting-method-item/cutting-method-item.component';
import { CuttingMethodListingComponent } from './cutting-method-listing/cutting-method-listing.component';

import { CuttingMethodDetailsComponent } from './cutting-method-details/cutting-method-details.component';
import { CuttingSliderComponent } from './cutting-slider/cutting-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CuttingMethodAddComponent, CuttingMethodItemComponent, CuttingMethodListingComponent,
,
    CuttingMethodDetailsComponent
,
    CuttingSliderComponent
],
    
    exports:[CuttingSliderComponent]
})
export class CuttingMethodsModule { }
