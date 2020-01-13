import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor(private router: Router) { }
  // clickSetup(id) {
  //   const ele = document.querySelector('#overview');
  //   if (id === 'overview') {
  //     document.querySelectorAll('li').forEach(dothis);
  //     function dothis(item) {
  //       item.classList.add('unclicked-element');
  //     }
  //     ele.classList.add('clicked-element');
  //   } else if (id === 'gettingsetup') {
  //     document.querySelectorAll('li').forEach(dothis);
  //     function dothis(item) {
  //       item.classList.add('unclicked-element');
  //     }
  //     ele.classList.add('clicked-element');
  //   } else {
  //     document.querySelectorAll('li').forEach(dothis);
  //     function dothis(item) {
  //       item.classList.add('unclicked-element');
  //     }
  //   }


    // const check = document.querySelectorAll('li');
    // check.forEach(dothis);

    // function dothis(item) {
    //   if (id === 'gettingsetup') {
    //     item.classList.add('unclicked-element');
    //     document.getElementById('gettingsetup').classList.add('clicked-element');
    //   } else if (id === 'overview') {
    //     item.classList.add('unclicked-element');
    //     document.getElementById('overview').classList.add('clicked-element');
    //   } else {
    //     item.classList.add('unclicked-element');
    //   }
    // }


  // }

  ngOnInit() {
  }

}
