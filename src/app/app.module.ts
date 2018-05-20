import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CuttingMethodsModule} from './cutting-methods/cutting-methods.module';
import {CuttingMethodItemComponent} from './cutting-methods/cutting-method-item/cutting-method-item.component';
import {ToolsModule} from './tools/tools.module';
import {ToolItemComponent} from'./tools/tool-item/tool-item.component';
import { AppComponent } from './app.component';
import { from } from 'rxjs/internal/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    CuttingMethodItemComponent,
    ToolItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
