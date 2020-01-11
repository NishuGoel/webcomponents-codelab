import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _sharedService: SharedService) {
    this._sharedService.routerId = 1;
   }

  ngOnInit() {
  }

}
