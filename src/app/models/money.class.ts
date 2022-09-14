export class Money {

    budget: number;
    expenditure: number;
    revenue: number;
    moneyInFood: number;

    constructor(obj?: any) {
        this.budget = obj ? obj.budget : '';
        this.expenditure = obj ? obj.expenditure : '';
        this.revenue = obj ? obj.revenue : '';
        this.moneyInFood = obj ? obj.moneyInFood : '';
    }

    public toJSON() {
        return {
            budget: this.budget,
            expenditure: this.expenditure,
            revenue: this.revenue,
            moneyInFood: this.moneyInFood
        }
    }
}