import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
