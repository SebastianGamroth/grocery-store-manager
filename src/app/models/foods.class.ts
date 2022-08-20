interface Food {
    value: string;
    viewValue: string;
}

export class Foods {

    foods: Food[] = [
        { value: 'Fruit', viewValue: 'Fruit' },
        { value: 'Vegetables', viewValue: 'Vegetables' },
    ];

    // "nutritions": {
    //   "calories": 52,
    //   "carbohydrates": 11.4,
    //   "protein": 0.3,
    //   "fat": 0.4

    id: string;
    genus: string;
    name: string;
    price: string;
    calories: string;
    carbohydrates: string;
    protein: string;
    fat: string;
    timeStemp: any;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.genus = obj ? obj.genus : '';
        this.name = obj ? obj.name : '';
        this.price = obj ? obj.price : '';
        this.calories = obj ? obj.calories : '';
        this.carbohydrates = obj ? obj.carbohydrates : '';
        this.protein = obj ? obj.protein : '';
        this.fat = obj ? obj.fat : '';
        this.timeStemp = obj ? obj.timeStemp : '';
    }


    public toJSON() {
        return {
            id: this.id,
            genus: this.genus,
            name: this.name,
            price: this.price,
            calories: this.calories,
            carbohydrates: this.carbohydrates,
            protein: this.protein,
            fat: this.fat,
            timeStemp: this.timeStemp
        }
    }
}