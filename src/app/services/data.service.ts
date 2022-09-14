import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
import { Foods } from '../models/foods.class';
import { Money } from '../models/money.class';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  foodsClass = new Foods();
  foodsArray = [];

  moneyClass = new Money();
  // moneyArray = [];
  // moneyArray: { budget: number; expenditure: number; revenue: number; moneyInFood: number }[] = [
  //   {
  //     'budget': 0,
  //     'expenditure': 0,
  //     'revenue': 0,
  //     'moneyInFood': 0
  //   }
  // ];
  moneyArray: { budget: number; expenditure: number; revenue: number; moneyInFood: number } = {
    'budget': 0,
    'expenditure': 0,
    'revenue': 0,
    'moneyInFood': 0
  };

  colRef: any;
  docRef: any;
  docsSnap: any;

  colRefMoney: any;
  docRefMoney: any;
  docsSnapMoney: any;

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

  money: number;
  lostmoney: number;

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
    this.money = Math.round((this.orderCurrentFoods['euro'].replace(',', '.') * this.orderPrice) * 100) / 100;
    return this.money;
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

    this.colRef = collection(this.firestore, "food-collection");
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

      this.foodsClass.product = doc.data()['product'];
      this.foodsClass.euro = doc.data()['euro'];
      this.foodsClass.unit = doc.data()['unit'];
      this.foodsClass.origin = doc.data()['origin'];

      this.foodsArray.push(this.foodsClass.toJSON());

      if (this.addNewProductToChalkboard == doc.data()['id']) {
        this.addFoodsToArray.push(doc.data()['product']);

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

    console.log(this.foodsArray);

  }

  async getAllMoney() {
    // this.moneyArray = {};

    this.colRefMoney = collection(this.firestore, "food-money");
    this.docsSnapMoney = await getDocs(this.colRefMoney);

    this.docsSnapMoney.forEach((doc: any) => {

      this.moneyClass.budget = doc.data()['budget'];
      // this.moneyClass.budget = Math.round(doc.data()['budget'] * 100) / 100;
      // this.moneyClass.budget = Math.round(doc.data()['budget'].replace('.', ',') * 100) / 100;

      this.moneyClass.expenditure = doc.data()['expenditure'];
      this.moneyClass.revenue = doc.data()['revenue'];
      this.moneyClass.moneyInFood = doc.data()['moneyInFood'];

      // this.moneyArray.push(this.moneyClass.toJSON());
      this.moneyArray = this.moneyClass.toJSON();

    });

    console.log(this.moneyArray);
    this.changeMoneyFormat();
  }

  budgetFormat: any;

  changeMoneyFormat() {
    this.budgetFormat = this.moneyArray.budget;

    this.budgetFormat = Math.round(this.budgetFormat * 100) / 100;
    this.budgetFormat = this.budgetFormat.toString();
    this.budgetFormat = this.budgetFormat.replace('.', ',');

    console.log(this.budgetFormat);
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

  async orderFood(changeCalkboard: any) {
    this.timeStemp = new Date;
    this.foodsClass.timeStemp = this.timeStemp.getTime();

    this.foodsClass.chalkboard = changeCalkboard;

    addDoc(this.colRef, this.foodsClass.toJSON())
      .then(() => {
        this.foodsArray = [];
        this.addNewProductToChalkboard = this.foodsClass.id;
        this.currentGenus = this.foodsClass.genus;
        // this.currentGenus = this.orderCurrentFoods['product'];
        this.getAllData();
        // console.log(this.foodsClass.genus)
      })
      .catch(error => {
        console.log(error);
      })

    // Money

    await this.getAllMoney();
    await this.editMoney();

  }


  getMoney() {
    this.moneyClass.budget = 88;
    this.moneyClass.expenditure = 23;
    this.moneyClass.moneyInFood = 65;
    this.moneyClass.revenue = 6;

    addDoc(this.colRefMoney, this.moneyClass.toJSON())
      .then(() => {
        // this.moneyArray = [];
        this.getAllMoney();
      })

    this.getAllMoney();
    // console.log(this.moneyArray);
  }



  async editMoney() {
    let id = "Fb1skSbxJc1jXr0kKwgq";

    this.docRefMoney = doc(this.firestore, "food-money", id);

    let budget: number = this.moneyClass.budget - this.money;
    let moneyInFood: number = this.moneyClass.moneyInFood + this.money;
    let revenue: number = this.moneyClass.revenue + this.lostmoney;

    let data = {
      budget: budget,
      moneyInFood: moneyInFood,
      revenue: revenue
    };


    await setDoc(this.docRefMoney, data, { merge: true })
      // .then(docRef => {
      //   console.log("Entire Document has been updated successfully", docRef);
      // })
      .catch(error => {
        console.log(error);
      })

    await this.getAllMoney();
  }

  // async editFood(name: string, id: any) {
  //   console.log(name, id)
  //   this.docRef = doc(this.firestore, "food-collection", id);
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

    this.docRef = doc(this.firestore, "food-collection", id);

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


  async deleteFoodFromDoc(id: any) {
    console.log(id)
    this.docRef = doc(this.firestore, "food-collection", id)
    console.log(this.docRef);
    deleteDoc(this.docRef).then(() => {
      this.foodsArray = [];
    });

    this.colRefMoney = collection(this.firestore, "food-collection", id);
    this.docsSnapMoney = await getDocs(this.colRefMoney);

    this.docsSnapMoney.forEach((doc: any) => {
      let a: any;
      a = doc.data()['euro'];
      console.log(a)
    });
  }


  filterGenus() {

    let fruits = this.foodsArray.filter(t => t['genus'] == 'Obst');
    this.filterGenusGroup.fruits = fruits;

    let vegetables = this.foodsArray.filter(t => t['genus'] == 'Gemüse');
    this.filterGenusGroup.vegetables = vegetables;

    console.log(this.filterGenusGroup)
  }

}