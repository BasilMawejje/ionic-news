import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' },
  { path: 'techcrunch', loadChildren: './techcrunch/techcrunch.module#TechcrunchPageModule' },
  { path: 'bitcoin', loadChildren: './bitcoin/bitcoin.module#BitcoinPageModule' },
  { path: 'topheadlines', loadChildren: './topheadlines/topheadlines.module#TopheadlinesPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
