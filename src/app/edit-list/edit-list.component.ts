import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  constructor(public service: DataService) { }

  async ngOnInit(): Promise<void> {
    await this.service.getAllData();
    this.service.filterGenus();
  }

  async deleteFoodFromDoc(id: any) {
    this.service.deleteFoodFromDoc(id);
    await this.service.getAllData();
    this.service.filterGenus();
  }

}
