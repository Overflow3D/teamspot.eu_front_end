import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


export interface Role {
  admin: SampleCommand[],
  user: SampleCommand[],
}

export interface SampleCommand {
  name: string,
  description: string,
  parameters: string[]
}

@Injectable()
export class BotService {
  constructor(private http: Http) {}
  getSample(): Observable<Role>{
    return this.http.get('/static/assets/sampleCmd.json')
                    .map((res: Response) => <Role>res.json())
                    .catch(this.handleError);

  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
