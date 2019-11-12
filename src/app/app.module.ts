import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridPartOneComponent } from './grid-part-one/grid-part-one.component';
import { GridPartSevenComponent } from './grid-part-seven/grid-part-seven.component';
import { GridThreeComponent } from './grid-three/grid-three.component';
import { GridThreePartTwoComponent } from './grid-three-part-two/grid-three-part-two.component';
import { GridFourComponent } from './grid-four/grid-four.component';
import { GridFivePartOneComponent } from './grid-five-part-one/grid-five-part-one.component';
import { GridFivePartTwoComponent } from './grid-five-part-two/grid-five-part-two.component';
import { GridFivePartThreeComponent } from './grid-five-part-three/grid-five-part-three.component';
import { GridSixPartOneComponent } from './grid-six-part-one/grid-six-part-one.component';
import { RevealDirective } from './reveal.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridPartOneComponent,
    GridPartSevenComponent,
    GridThreeComponent,
    GridThreePartTwoComponent,
    GridFourComponent,
    GridFivePartOneComponent,
    GridFivePartTwoComponent,
    GridFivePartThreeComponent,
    GridSixPartOneComponent,
    RevealDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
