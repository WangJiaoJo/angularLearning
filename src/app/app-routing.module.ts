import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { LearningComponent } from './learning/learning/learning.component';
import { ArchitectureComponent } from './learning/architecture/architecture.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'fruit-detail/:id', component: FruitDetailComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'learning/architecture', component: ArchitectureComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
