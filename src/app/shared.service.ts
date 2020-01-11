import { Injectable, OnChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public routerId: number;
  constructor() { }

}
