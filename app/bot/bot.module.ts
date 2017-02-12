import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotComponent } from './bot.component';
import { BotRoutingModule } from './bot-routing.module';
import { BotService } from './bot.service';

@NgModule({
  imports: [CommonModule, BotRoutingModule],
  declarations: [BotComponent],
  exports: [BotComponent],
  providers: [BotService]
})
export class BotModule {



}
