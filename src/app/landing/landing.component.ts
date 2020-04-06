import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  private menus = [
    {name: 'App', path: '/apps'},
    {name: 'Blog', path: '/blogs'},
    {name: 'Experiment', path: '/experiments'},
    {name: 'About Me', path: '/about'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
