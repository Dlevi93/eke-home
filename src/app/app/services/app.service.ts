import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
  private _state: boolean;
  stateChanged: EventEmitter<boolean> = new EventEmitter();
  public configObservable = new BehaviorSubject<boolean>(false);

  constructor() {
    console.log('App event service loaded');
  }

  set state(val: boolean) {
    this._state = val;
    this.stateChanged.emit(this._state);
    console.log('state changed:', val);
  }

  get state(): boolean {
    return this._state;
  }

  stateChangedEmitter() {
    return this.stateChanged;
  }
}
