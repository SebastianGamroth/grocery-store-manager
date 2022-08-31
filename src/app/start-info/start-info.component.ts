import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-info',
  templateUrl: './start-info.component.html',
  styleUrls: ['./start-info.component.scss']
})
export class StartInfoComponent implements OnInit {
  @Input() startInfo: any = true;

  constructor() { }

  ngOnInit(): void {
  }

}
