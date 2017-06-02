export class Category {
    private category: string;
    private dishes;

    constructor(category: string) {
        this.setCategory(category);
    }

    getCategory() { return this.category; }
    getDishes() {return this.dishes}


    setCategory(value) { this.category = value; }
    setDishes(value) { this.dishes = value; }
}