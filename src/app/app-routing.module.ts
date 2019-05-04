import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-ticker', loadChildren: './add-ticker/add-ticker.module#AddTickerPageModule' },
    { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
    { path: 'stocks', loadChildren: './landing/stocks/stocks.module#StocksPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
