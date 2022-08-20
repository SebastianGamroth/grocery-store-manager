import { Component, OnInit } from '@angular/core';
import { Foods } from '../models/foods.class';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs } from '@angular/fire/firestore';

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

  colorId: string;
  timeStemp: any;

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

    // Sort timestamp ascending order
    this.foodsArray.sort(function (a, b) {
      return parseFloat(a.timeStemp) - parseFloat(b.timeStemp);
    });

    this.foodsClass.name = '';
    this.foodsClass.price = '';
    this.foodsClass.genus = '';
    this.foodsClass.calories = '';
    this.foodsClass.carbohydrates = '';
    this.foodsClass.protein = '';
    this.foodsClass.fat = '';
    console.log('foodsArray ', this.foodsArray);
  }

  // input value -> foodsClass -> firebase
  addFruitToDoc() {
    this.timeStemp = new Date;
    this.foodsClass.timeStemp = this.timeStemp.getTime();

    addDoc(this.colRef, this.foodsClass.toJSON())
      .then(() => {
        this.foodsArray = [];
        this.getAllData();
      })
      .catch(error => {
        console.log(error);
      })
  }

  // 
  deleteOneDoc(id: any) {
    this.docRef = doc(this.firestore, "fruits", id);
    deleteDoc(this.docRef).then(() => {
      this.foodsArray = [];
      this.getAllData();
    })
  }

}
