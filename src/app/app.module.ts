import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridPartOneComponent } from './grid-part-one/grid-part-one.component';
import { GridPartSevenComponent } from './grid-part-seven/grid-part-seven.component';
import { GridThreeComponent } from './grid-three/grid-three.component';
import { GridThreePartTwoComponent } from './grid-three-part-two/grid-three-part-two.component';
import { GridFourComponent } from './grid-four/grid-four.component';

@NgModule({
  declarations: [
    AppComponent,
    GridPartOneComponent,
    GridPartSevenComponent,
    GridThreeComponent,
    GridThreePartTwoComponent,
    GridFourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
