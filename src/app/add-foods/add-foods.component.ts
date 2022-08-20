import { Component, OnInit } from '@angular/core';
import { Foods } from '../models/foods.class';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-foods',
  templateUrl: './add-foods.component.html',
  styleUrls: ['./add-foods.component.scss']
})

export class AddFoodsComponent implements OnInit {

  foodsClass = new Foods();
  foodsArray = [];

  colRef: any;
  docRef: any;
  docsSnap: any;

  constructor(private firestore: Firestore) { }

  async ngOnInit(): Promise<void> {
    await this.getAllData();
  }

  async getAllData() {
    this.colRef = collection(this.firestore, "fruits");
    this.docsSnap = await getDocs(this.colRef);

    this.docsSnap.forEach((doc: any) => {
      this.foodsClass.id = doc.id;
      this.foodsClass.name = doc.data()['name'];
      this.foodsClass.price = doc.data()['price'];
      this.foodsClass.genus = doc.data()['genus'];
      this.foodsClass.calories = doc.data()['calories'];
      this.foodsClass.carbohydrates = doc.data()['carbohydrates'];
      this.foodsClass.protein = doc.data()['protein'];
      this.foodsClass.fat = doc.data()['fat'];
      this.foodsClass.timeStemp = doc.data()['timeStemp'];

      this.foodsArray.push(this.foodsClass.toJSON());
    });
    console.log(this.foodsArray);
  }

}
