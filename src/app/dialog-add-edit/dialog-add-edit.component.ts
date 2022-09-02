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
  image: any = [];

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
    this.service.searchImage = '';
    this.image = [];
  }

  hideloader() {
    console.log('hide')
    // document.getElementById('loading').style.display = 'none';
  }

  selectImage(img: any) {
    this.service.foodsClass.img = img;
  }

}
