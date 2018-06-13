import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolListingComponent } from './tool-listing/tool-listing.component';
import { ToolAddComponent } from './tool-add/tool-add.component';
import { ToolItemComponent } from './tool-item/tool-item.component';
import { ToolDetailesComponent } from './tool-detailes/tool-detailes.component';
import { OtherToolsComponent } from './other-tools/other-tools.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolListingComponent, ToolAddComponent, ToolItemComponent,
    ToolDetailesComponent,
    OtherToolsComponent
]
  
})
export class ToolsModule { }
