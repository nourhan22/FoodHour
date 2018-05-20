import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CuttingMethodsModule} from './cutting-methods/cutting-methods.module';
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';
import {MicroOrganismsModule} from './micro-organisms/micro-organisms.module'
import { AppComponent } from './app.component';
import { MicroOneItemComponent } from 'src/app/micro-organisms/micro-organism-listing/micro-one-item/micro-one-item.component';
import { MicroOrganismListingComponent } from 'src/app/micro-organisms/micro-organism-listing/micro-organism-listing.component';
import { CookingMethodItemComponent } from 'src/app/cooking-methods/cooking-method-item/cooking-method-item.component';



@NgModule({
  declarations: [
    AppComponent,
    CuttingMethodItemComponent,
    MicroOneItemComponent,
    MicroOrganismListingComponent,
    CookingMethodItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
