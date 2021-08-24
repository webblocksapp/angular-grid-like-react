import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalBootstrapGridScreen } from './screens/normal-bootstrap-grid/normal-bootstrap-grid.screen';
import { ReactMuiLikeGridScreen } from './screens/react-mui-like-grid/react-mui-like-grid.screen';

@NgModule({
  declarations: [
    AppComponent,
    NormalBootstrapGridScreen,
    ReactMuiLikeGridScreen,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
