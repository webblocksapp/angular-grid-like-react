import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalBootstrapGridScreen } from './screens/normal-bootstrap-grid/normal-bootstrap-grid.screen';
import { ReactMuiLikeGridPlaygroundScreen } from './screens/react-mui-like-grid-playground/react-mui-like-playground';
import { ReactMuiLikeGridScreen } from './screens/react-mui-like-grid/react-mui-like-grid.screen';

const routes: Routes = [
  { path: 'normal-bootstrap-grid', component: NormalBootstrapGridScreen },
  { path: 'react-mui-like-grid', component: ReactMuiLikeGridScreen },
  {
    path: 'react-mui-like-grid-playground',
    component: ReactMuiLikeGridPlaygroundScreen,
  },
  { path: '**', redirectTo: 'normal-bootstrap-grid' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
