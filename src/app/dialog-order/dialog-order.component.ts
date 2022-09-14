import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddFoodsComponent } from '../add-foods/add-foods.component';
import { FoodsJson } from '../models/foods.json.class';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dialog-order',
  templateUrl: './dialog-order.component.html',
  styleUrls: ['./dialog-order.component.scss']
})
export class DialogOrderComponent implements OnInit {
  image: any = [];
  foodsJson = new FoodsJson();

  constructor(public service: DataService, public dialogRef: MatDialogRef<AddFoodsComponent>) { }

  ngOnInit(): void {
    this.service.foodsClass.img = '';
    this.service.searchImage = this.service.orderCurrentFoods['product'];
    this.getImage();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async orderFood() {
    await this.service.orderFood('wahrenhouse');

    // setTimeout(() => {
    //   console.log(this.service.currentGenus)
    //   this.changeGenusFilter(this.service.currentGenus);
    // }, 1000);

  }


  getImage() {
    this.service.getApiPicture().subscribe(Response => {
      if (Response) {
        this.hideloader();
      }
      Response['hits'].forEach((element: any) => {
        this.image.push(element['previewURL']);
      });
      // console.log(this.image);
    });
    this.service.orderPrice = 1;
  }

  hideloader() {
    console.log('hide')
    // document.getElementById('loading').style.display = 'none';
  }

  selectImage(img: any) {
    this.service.foodsClass.img = img;
  }


}
