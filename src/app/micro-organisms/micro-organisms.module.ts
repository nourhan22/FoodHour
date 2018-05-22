import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicroOrganismItemComponent } from './micro-organism-item/micro-organism-item.component';
import { MicroOrganismListingComponent } from './micro-organism-listing/micro-organism-listing.component';
import { MicroOrganismAddComponent } from './micro-organism-add/micro-organism-add.component';

import { MicroOrganismDetailsComponent } from './micro-organism-details/micro-organism-details.component';
import { TabsComponent } from './tabs/tabs.component';
import { MicroItemDescriptionComponent } from './micro-item-description/micro-item-description.component';
import { RelatedtopicComponent } from './relatedtopic/relatedtopic.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MicroOrganismItemComponent, MicroOrganismListingComponent, MicroOrganismAddComponent,

    MicroOrganismDetailsComponent,

  
     MicroOrganismDetailsComponent,

    TabsComponent,
    MicroItemDescriptionComponent,
    ,
    RelatedtopicComponent
]
})
export class MicroOrganismsModule { }
