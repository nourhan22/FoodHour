import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicroOrganismItemComponent } from './micro-organism-item/micro-organism-item.component';
import { MicroOrganismListingComponent } from './micro-organism-listing/micro-organism-listing.component';
import { MicroOrganismAddComponent } from './micro-organism-add/micro-organism-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MicroOrganismItemComponent, MicroOrganismListingComponent, MicroOrganismAddComponent]
})
export class MicroOrganismsModule { }
