import { Injectable } from '@angular/core';
@Injectable()
export class NotifyService {
  isAccepted = false;
  constructor() {
    if (this.getCookie("_notify") === "true") {
      this.isAccepted = true;
    }
  }

  public setAccepted() {
    this.isAccepted = true;
    this.notifyAccept();
  }

  private notifyAccept() {
    this.setCookie("_notify", "true", 720);
  }

  private getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = name + "=";
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s\+/g, "");
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return "";
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = "") {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
  }

}
