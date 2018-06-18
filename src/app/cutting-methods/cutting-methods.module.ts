import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuttingMethodAddComponent } from './cutting-method-add/cutting-method-add.component';
import { CuttingMethodItemComponent } from './cutting-method-item/cutting-method-item.component';
import { CuttingMethodListingComponent } from './cutting-method-listing/cutting-method-listing.component';
import { MatSelectModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { CuttingMethodDetailsComponent } from './cutting-method-details/cutting-method-details.component';
import { CuttingSliderComponent } from './cutting-slider/cutting-slider.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  imports: [  
     CommonModule,
     FormsModule,    
     ReactiveFormsModule,
     MatSelectModule,
  ],
  declarations: [
      CuttingMethodAddComponent, 
      CuttingMethodItemComponent, 
      CuttingMethodListingComponent,
    CuttingMethodDetailsComponent,
    CuttingSliderComponent
,
    MyComponentComponent
],
    
    exports:[CuttingSliderComponent]
})
export class CuttingMethodsModule { }
