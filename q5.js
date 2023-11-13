function Product(name, category, price, stock){
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

function Inventory(){
    this.Products = [];
}

Inventory.prototype.addProduct = function (product){
    if (product instanceof Product) {
        this.Products.push(product)
        console.log(`Added ${product.name} to the inventory.`);
    } else {
        console.log("invailid input");
    }
}

Inventory.prototype.deleteProduct = function (name){
    const removedProcduct = this.Products.findIndex(product => product.name.toLocaleLowerCase() == name.toLocaleLowerCase())
    if (removedProcduct !== -1) {
        this.Products.splice(removedProcduct,1)
        console.log(`Deleted ${name} from the inventory.`);
    } else {
        console.log("invailid input");
    }
}

const inventory = new Inventory()

const product1 = new Product('Laptop', 'Electronics', 899,10)
const product2 = new Product('Book', 'Books', 20, 50)

inventory.addProduct(product1) // Added Laptop to the inventory.
inventory.addProduct(product2) // Added Book to the inventory.

inventory.deleteProduct("laptop") // Deleted laptop from the inventory.


