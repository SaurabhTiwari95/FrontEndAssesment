import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsHomeComponent } from './news-home/news-home.component';

const routes: Routes = [
  {
    path: 'news',
    component : NewsHomeComponent
  },
  {
    path:'',
    redirectTo : 'news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
