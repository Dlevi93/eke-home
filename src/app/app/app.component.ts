import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AppService } from './services/app.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],

})
export class AppComponent implements OnInit, OnDestroy {
  progressBarHidden: boolean;
  subscription: Subscription;

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.subscription = this.appService.stateChangedEmitter().subscribe(state => this.progressBarHidden = state);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
