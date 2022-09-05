import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
import { Foods } from '../models/foods.class';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  foodsClass = new Foods();
  foodsArray = [];

  colRef: any;
  docRef: any;
  docsSnap: any;

  addFoodsToArray = [];

  colorId: string;
  timeStemp: any;

  filterGenusArray: any;

  addNewProductToChalkboard: any;
  currentGenus: any;

  filterGenusGroup: any = {
    'fruits': [],
    'vegetables': []
  }

  // careerSteps: { img: string; title: number; description: string; }[] =[
  //   {
  //     'img': '',
  //     'title': 0,
  //     'description': 'Studying Business Mathematics boosted my talent for structured and analytical thinking. I coded my first project with Delphi, solving a problem with Artificial Intelligence.'
  //   },
  // ]

  orderCurrentFoods: { product: string; euro: number; unit: string; origin: string }[] = [
    {
      'product': '',
      'euro': 0,
      'unit': '',
      'origin': ''
    }
  ];
  orderPrice: any = 1;

  // pixabay
  url: any;
  API_KEY = '27740480-24a00016072f5bb51dc30b94a';
  searchImage: string = 'apple';

  drawer: boolean = true;

  constructor(private firestore: Firestore, private http: HttpClient) { }

  result() {
    return Math.round((this.orderCurrentFoods['euro'].replace(',', '.') * this.orderPrice) * 100) / 100;
  }

  openOrCloseSideBar() {
    this.drawer = !this.drawer;
  }

  getApiPicture() {
    this.url = `https://pixabay.com/api/?key=${this.API_KEY}&q=${this.searchImage}&per_page=5&image_type=photo&category=food&pretty=true`;
    return this.http.get(this.url);
  }

  // Json
  getJSON() {
    let urlJSON: any = 'src/app/models/foods.json';
    return this.http.get(urlJSON);
  }



  async getAllData() {
    this.foodsArray = [];
    this.addFoodsToArray = [];

    this.colRef = collection(this.firestore, "fruits");
    this.docsSnap = await getDocs(this.colRef);

    this.docsSnap.forEach((doc: any) => {
      this.foodsClass.id = doc.id;
      this.foodsClass.img = doc.data()['img'];
      this.foodsClass.name = doc.data()['name'];
      this.foodsClass.price = doc.data()['price'];
      this.foodsClass.genus = doc.data()['genus'];
      this.foodsClass.calories = doc.data()['calories'];
      this.foodsClass.carbohydrates = doc.data()['carbohydrates'];
      this.foodsClass.protein = doc.data()['protein'];
      this.foodsClass.fat = doc.data()['fat'];
      this.foodsClass.timeStemp = doc.data()['timeStemp'];
      this.foodsClass.timeStemp = doc.data()['timeStemp'];

      this.foodsClass.chalkboard = doc.data()['chalkboard'];

      this.foodsArray.push(this.foodsClass.toJSON());

      if (this.addNewProductToChalkboard == doc.data()['id']) {
        this.addFoodsToArray.push(doc.data()['name']);

        this.addNewProductToChalkboard = false;
      }
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

    // console.log(this.foodsArray);
  }


  addFoodToDoc(changeCalkboard: any) {
    this.timeStemp = new Date;
    this.foodsClass.timeStemp = this.timeStemp.getTime();

    this.foodsClass.chalkboard = changeCalkboard;

    addDoc(this.colRef, this.foodsClass.toJSON())
      .then(() => {
        this.foodsArray = [];
        this.addNewProductToChalkboard = this.foodsClass.id;
        this.currentGenus = this.foodsClass.genus;
        this.getAllData();
        // console.log(this.foodsClass.genus)
      })
      .catch(error => {
        console.log(error);
      })
  }

  // async editFood(name: string, id: any) {
  //   console.log(name, id)
  //   this.docRef = doc(this.firestore, "fruits", id);
  //   this.docsSnap = await getDoc(this.docRef);
  //   this.docsSnap.data();

  //   try {
  //     const docSnap = await getDoc(this.docRef);
  //     if (docSnap.exists()) {
  //       console.log(docSnap.data());
  //     } else {
  //       console.log("Document does not exist")
  //     }

  //   } catch (error) {
  //     console.log(error)
  //   }

  //   this.getAllData();
  // }


  async editFood(name: string, id: any) {
    // console.log(name, id)

    this.docRef = doc(this.firestore, "fruits", id);

    const data = {
      chalkboard: name
    };

    await setDoc(this.docRef, data, { merge: true })
      // .then(docRef => {
      //   console.log("Entire Document has been updated successfully", docRef);
      // })
      .catch(error => {
        console.log(error);
      })

    await this.getAllData();
  }


  deleteFoodFromDoc(id: any) {
    console.log(id)
    this.docRef = doc(this.firestore, "fruits", id);
    deleteDoc(this.docRef).then(() => {
      this.foodsArray = [];
    })
  }


  filterGenus() {
    let fruits = this.foodsArray.filter(t => t['genus'] == 'Fruits');
    this.filterGenusGroup.fruits = fruits;

    let vegetables = this.foodsArray.filter(t => t['genus'] == 'Vegetables');
    this.filterGenusGroup.vegetables = vegetables;
  }

}