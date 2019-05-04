import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TypeAnalysisPage } from './type-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: TypeAnalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TypeAnalysisPage]
})
export class TypeAnalysisPageModule {}
