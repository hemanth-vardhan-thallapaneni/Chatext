import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  icons = [
    {
      name:'Home',
      icon:'home'
    },
    {
      name:'Groups',
      icon:'group'
    },
    {
      name:'Settings',
      icon:'setting'
    }
  ]

  ngOnInit(): void {
  }

}
