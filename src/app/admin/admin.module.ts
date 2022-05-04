import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CricketComponent } from './cricket/cricket.component';
import { FootballComponent } from './football/football.component';
import { TennisComponent } from './tennis/tennis.component';
import { GolfComponent } from './golf/golf.component';
import { BasketballComponent } from './basketball/basketball.component';
import { BadmintonComponent } from './badminton/badminton.component';


@NgModule({
  declarations: [
    CricketComponent,
    FootballComponent,
    TennisComponent,
    GolfComponent,
    BasketballComponent,
    BadmintonComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
