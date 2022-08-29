import { Component, OnInit } from '@angular/core';
import { Foods } from '../models/foods.class';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-foods',
  templateUrl: './add-foods.component.html',
  styleUrls: ['./add-foods.component.scss']
})

export class AddFoodsComponent implements OnInit {

  foodsClass = new Foods();
  foodsArray = [];

  filterGenusArray: any;

  constructor(public service: DataService) { }

  async ngOnInit(): Promise<void> {
    await this.service.getAllData();
  }

  changeGenusFilter(value: any) {
    let selection = this.service.foodsArray.filter(t => t['genus'] == value);
    this.filterGenusArray = selection;
    if (value == 'all') {
      this.filterGenusArray = this.foodsArray;
    }
    // console.log(selection)
  }
  

  // input value -> foodsClass -> firebase
  addFoodToDoc() {
    this.service.addFoodToDoc('wahrenhouse');
  }


  deleteFoodFromDoc(id: any) {
    this.service.deleteFoodFromDoc(id);
  }

}
