import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogOrderComponent } from '../dialog-order/dialog-order.component';
import { FoodsJson } from '../models/foods.json.class';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-order-foods',
  templateUrl: './order-foods.component.html',
  styleUrls: ['./order-foods.component.scss']
})

export class OrderFoodsComponent implements OnInit {
  foodsJson = new FoodsJson();
  changeGenus: string = 'Obst';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.foodsJson.foodsJson[this.changeGenus]);

  constructor(public service: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changeGenusFilter(value: string) {
    this.changeGenus = value;
    this.dataSource = new MatTableDataSource(this.foodsJson.foodsJson[this.changeGenus]);
  }

  applyFilter(value: Event) {
    console.log(this.dataSource)
    const filterValue = (value.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(value: any): void {

    const dialogRef = this.dialog.open(DialogOrderComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);

    });

    this.service.orderCurrentFoods = value;
    console.log(this.service.orderCurrentFoods)
  }

}
