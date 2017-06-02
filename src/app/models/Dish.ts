export class Dish {
    private name: string;
    private price: number;
    private description: string;
    private category: string;

    constructor(name: string, price: number, description: string, category: string) {
        this.setName(name);
        this.setPrice(price);
        this.setDescription(description);
        this.setCategory(category);
    }

    getName() { return this.name; }
    getPrice() { return this.price; }
    getDescription() { return this.description; }
    getCategory() { return this.category; }

    setName(value) { this.name = value; }
    setPrice(value) { this.price = value; }
    setDescription(value) { this.description = value; }
    setCategory(value) { this.category = value; }
}