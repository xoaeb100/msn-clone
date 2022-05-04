import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadmintonComponent } from './badminton/badminton.component';
import { BasketballComponent } from './basketball/basketball.component';
import { CricketComponent } from './cricket/cricket.component';
import { FootballComponent } from './football/football.component';
import { GolfComponent } from './golf/golf.component';
import { TennisComponent } from './tennis/tennis.component';

const routes: Routes = [{

  path:'home',
  children:[{
    path: 'football',
    component: FootballComponent
  },
{path:'cricket',
component:CricketComponent}]},


{path: 'basketball', component: BasketballComponent},

{path: 'cricket', component: CricketComponent},
{path: 'football', component: FootballComponent},
{path: 'golf', component: GolfComponent},
{path: 'tennis', component: TennisComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
