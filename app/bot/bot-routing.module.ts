import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BotComponent } from './bot.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'bot', component: BotComponent }
    ])
  ],
  exports: [RouterModule]
})
export class BotRoutingModule { }
