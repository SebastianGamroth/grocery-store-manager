import { Component, OnInit } from '@angular/core';
import { Foods } from '../models/foods.class';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddEditComponent } from '../dialog-add-edit/dialog-add-edit.component';

@Component({
  selector: 'app-add-foods',
  templateUrl: './add-foods.component.html',
  styleUrls: ['./add-foods.component.scss']
})

export class AddFoodsComponent implements OnInit {

  foodsClass = new Foods();

  filterGenusArray: any;

  fruitsValue: any;
  vegetablesValue: any;
  milkValue: any = 0;

  constructor(public service: DataService, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.service.getAllData();

    this.changeGenusFilter('Fruits');
  }

  changeGenusFilter(value: any) {
    // console.log(value);
    let selection = this.service.foodsArray.filter(t => t['genus'] == value);
    this.filterGenusArray = selection;
    // if (value == 'all') {
    //   this.filterGenusArray = this.foodsArray;
    // }

    let fruits = this.service.foodsArray.filter(t => t['genus'] == 'Fruits');
    this.fruitsValue = fruits.length;

    let vegetables = this.service.foodsArray.filter(t => t['genus'] == 'Vegetables');
    this.vegetablesValue = vegetables.length;

    // console.log(this.filterGenusArray)
  }


  openDialog(): void {

    const dialogRef = this.dialog.open(DialogAddEditComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);

      setTimeout(() => {
        // console.log(this.service.currentGenus)
        this.changeGenusFilter(this.service.currentGenus);
      }, 1000);

    });
  }


}
