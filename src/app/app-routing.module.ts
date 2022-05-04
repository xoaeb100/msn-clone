import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FootballComponent } from './admin/football/football.component';
import { CricketComponent } from './admin/cricket/cricket.component';

const routes: Routes = [
  {

    path:'home',
    children:[{
      path: 'football',
      component: FootballComponent
    },
    {
      path: 'cricket',
      component: CricketComponent
    },
  {path:'',
component:HomepageComponent}]},
  {path: 'home', component: HomepageComponent},
  {path: 'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
