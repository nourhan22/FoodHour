import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CuttingMethodsModule} from './cutting-methods/cutting-methods.module';
import {CookingMethodsModule} from './cooking-methods/cooking-methods.module';
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';
import { CookingMethodItemComponent } from './cooking-methods/cooking-method-item/cooking-method-item.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CuttingMethodItemComponent,
    CookingMethodItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
