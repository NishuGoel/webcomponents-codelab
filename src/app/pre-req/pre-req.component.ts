import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pre-req',
  templateUrl: './pre-req.component.html',
  styleUrls: ['./pre-req.component.scss']
})
export class PreReqComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _sharedService: SharedService) {
    this._sharedService.routerId = 2;

  }

  ngOnInit() {
  }
}
