import { Component, OnInit } from '@angular/core';
import { NotifyService } from './notify.service';

@Component({
  moduleId: module.id,
  selector: 'sd-notify',
  templateUrl: 'notify.component.html',
  styleUrls: ['notify.component.css'],
})
export class NotifyComponent implements OnInit {
  notifyState = "notifyContainer";
  isNotifyVisable = true;
  constructor(public notifyService: NotifyService){}

  ngOnInit() {
    if (this.notifyService.isAccepted) {
      console.log("?")
      this.notifyState = "hideNotify";
      this.isNotifyVisable = false;
    }
  }

  hideNotify(event:any) {
    let target = event.target || event.srcElement || event.currentTarget;
    let action = target.innerHTML;
    if ( action === "Accept" ) {
      this.notifyService.setAccepted();
    }
    this.isNotifyVisable = !this.notifyState;
    this.notifyState = this.isNotifyVisable ? "notifyContainer" : "hideNotify";
  }
}
