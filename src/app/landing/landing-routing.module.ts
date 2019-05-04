import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './landing.page';

const routes: Routes = [
    {
        path: 'landing',
        component: LandingPage,
        children:
            [
                { path: 'stocks', children: [{ path: '', loadChildren: './stocks/stocks.module#StocksPageModule' }] },
                { path: 'analysis', children: [{ path: '', loadChildren: './analysis/analysis.module#AnalysisPageModule' }] },
                { path: 'profile', children: [{ path: '', loadChildren: './profile/profile.module#ProfilePageModule' }] },
                { path: 'settings', children: [{ path: '', loadChildren: './app-settings/app-settings.module#AppSettingsPageModule' }] },
                { path: '', redirectTo: 'landing/stocks',pathMatch: 'full'  }
            ]
    },
    {
        path: '',
        redirectTo: 'landing/stocks',
        pathMatch: 'full'
    }

];


@NgModule({
    imports:
        [
            RouterModule.forChild(routes)
        ],
    exports:
        [
            RouterModule
        ]
})
export class LandingRoutingModule { }