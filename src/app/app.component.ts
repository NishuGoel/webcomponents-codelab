import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routedToId: number;
  title = 'Build a web component with Angular Elements';
  // tslint:disable-next-line: variable-name
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    console.log( this._sharedService.routerId);
    this.routedToId = this._sharedService.routerId;
    if (this.routedToId) {
      console.log(this.routedToId);
    }
  }

  public nextClicked() {

  }
  public backClicked() {

  }
}
