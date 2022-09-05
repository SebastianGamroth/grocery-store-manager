export class Foods {

    foods = [
        { value: 'Fruits', viewValue: 'Obst' },
        { value: 'Vegetables', viewValue: 'Vegetables' },
    ];
    // foods = [
    //     { value: 'Fruits', viewValue: 'Fruits' },
    //     { value: 'Vegetables', viewValue: 'Vegetables' },
    // ];

    boardArray: any = {
        'wahrenhouse': [],
        'monday': [],
        'wednesday': [],
        'friday': []
    };

    id: string;
    img: any;
    genus: string;
    name: string;
    price: string;
    calories: string;
    carbohydrates: string;
    protein: string;
    fat: string;
    timeStemp: any;
    chalkboard: any;

    product: string;
    euro: number;
    unit: string;
    origin: string;


    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.img = obj ? obj.img : '';
        this.genus = obj ? obj.genus : '';
        this.name = obj ? obj.name : '';
        this.price = obj ? obj.price : '';
        this.calories = obj ? obj.calories : '';
        this.carbohydrates = obj ? obj.carbohydrates : '';
        this.protein = obj ? obj.protein : '';
        this.fat = obj ? obj.fat : '';
        this.timeStemp = obj ? obj.timeStemp : '';
        this.chalkboard = obj ? obj.chalkboard : '';

        this.product = obj ? obj.product : '';
        this.euro = obj ? obj.euro : '';
        this.unit = obj ? obj.unit : '';
        this.origin = obj ? obj.origin : '';
    }


    public toJSON() {
        return {
            id: this.id,
            img: this.img,
            genus: this.genus,
            name: this.name,
            price: this.price,
            calories: this.calories,
            carbohydrates: this.carbohydrates,
            protein: this.protein,
            fat: this.fat,
            timeStemp: this.timeStemp,
            chalkboard: this.chalkboard,

            product: this.product,
            euro: this.euro,
            unit: this.unit,
            origin: this.origin
        }
    }
}