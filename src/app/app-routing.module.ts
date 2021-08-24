import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalBootstrapGridScreen } from './screens/normal-bootstrap-grid/normal-bootstrap-grid.screen';
import { ReactMuiLikeGridScreen } from './screens/react-mui-like-grid/react-mui-like-grid.screen';

const routes: Routes = [
  { path: 'normal-bootstrap-grid', component: NormalBootstrapGridScreen },
  { path: 'react-mui-like-grid', component: ReactMuiLikeGridScreen },
  { path: '**', redirectTo: 'normal-bootstrap-grid' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
