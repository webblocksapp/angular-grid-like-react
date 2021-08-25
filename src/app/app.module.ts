import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxAtom } from './atoms/box/box.atom';
import { ColDirective } from './directives/col.directive';
import { ContainerFluidDirective } from './directives/container-fluid.directive';
import { ContainerMdDirective } from './directives/container-md.directive';
import { ContainerDirective } from './directives/container.directive';
import { DisplayDirective } from './directives/display.directive';
import { MarginDirective } from './directives/margin.directive';
import { PaddingDirective } from './directives/padding.directive';
import { RowDirective } from './directives/row.directive';
import { SpacingDirective } from './directives/spacing.directive';
import { NormalBootstrapGridScreen } from './screens/normal-bootstrap-grid/normal-bootstrap-grid.screen';
import { ReactMuiLikeGridScreen } from './screens/react-mui-like-grid/react-mui-like-grid.screen';
import { ReactMuiLikeGridPlaygroundScreen } from './screens/react-mui-like-grid-playground/react-mui-like-playground';
import { CardAtom } from './atoms/card/card.atom';
import { FormsModule } from '@angular/forms';
import { NestedGridExampleScreen } from './screens/nested-grid-example/nested-grid-example.screen';

@NgModule({
  declarations: [
    AppComponent,
    NormalBootstrapGridScreen,
    ReactMuiLikeGridScreen,
    BoxAtom,
    RowDirective,
    ColDirective,
    DisplayDirective,
    ContainerDirective,
    ContainerFluidDirective,
    ContainerMdDirective,
    SpacingDirective,
    MarginDirective,
    PaddingDirective,
    ReactMuiLikeGridPlaygroundScreen,
    CardAtom,
    NestedGridExampleScreen,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
