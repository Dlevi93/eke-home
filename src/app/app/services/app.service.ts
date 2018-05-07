import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
  isLatestEventsLoaded: boolean;
  private isProgressBarHidden: BehaviorSubject<boolean>;

  constructor() {
    console.log('App event service loaded');
    this.isProgressBarHidden = new BehaviorSubject<boolean>(false);
  }

  public latestEventListIsLoaded() {
    this.isLatestEventsLoaded = true;

    this.checkIfLoadingCompleted();
  }

  checkIfLoadingCompleted() {
    if (this.isLatestEventsLoaded) {
      this.isProgressBarHidden = new BehaviorSubject<boolean>(false);
    }
  }

  public isLoadingCompleted(): Observable<boolean> {
    return this.isProgressBarHidden.asObservable();
  }
}
