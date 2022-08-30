import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddFoodsComponent } from '../add-foods/add-foods.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dialog-add-edit',
  templateUrl: './dialog-add-edit.component.html',
  styleUrls: ['./dialog-add-edit.component.scss']
})
export class DialogAddEditComponent implements OnInit {

  constructor(public service: DataService, public dialogRef: MatDialogRef<AddFoodsComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addFoodToDoc() {
    this.service.addFoodToDoc('wahrenhouse');

    // setTimeout(() => {
    //   console.log(this.service.currentGenus)
    //   this.changeGenusFilter(this.service.currentGenus);
    // }, 1000);
  }

}
