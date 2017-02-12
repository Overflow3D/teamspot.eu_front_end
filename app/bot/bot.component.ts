import { Component, OnInit } from '@angular/core';
import { BotService, SampleCommand, Role } from './bot.service';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-bot',
  templateUrl: 'bot.component.html',
  styleUrls: ['bot.component.css']
})
export class BotComponent implements OnInit {
  private role: Role;
  sampleInfo: SampleCommand[];
  cmd: string = "";
  description: string = "";
  params: string = "";
  exampleTitle: string = "";

  constructor(public botService: BotService){

  }

  ngOnInit() {
    this.getSampleCommands();
  }

  getSampleCommands() {
    this.botService.getSample()
        .subscribe(
          info => { this.role = info;
          },
          error => console.log(error)
        );
  }


  userCmd(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var cmdName = target.innerHTML;
    for (let cmd of this.sampleInfo) {
      if ( cmdName == cmd.name ) {
        this.exampleTitle = "Przykład:"
        this.cmd = "!" + cmd.name
        this.description = cmd.description
        this.params =  cmd.parameters.join(" ")
      }
    }
  }

  cmdFor(event: any) {
    this.cmd = "";
    this.description = "";
    this.params = "";
    this.exampleTitle = "";
    var target = event.target || event.srcElement || event.currentTarget;
    var roleName = target.innerHTML;
    if ( roleName == "Admin") {
      this.sampleInfo = this.role.admin;
      console.log("Admin")
      return
    }
   this.sampleInfo = this.role.user;
   console.log("User")
  }


}
