class Shape{
    constructor (){

    }
}

class Crircle extends Shape {
    constructor(redius){
        super()
        this.redius = redius;
    }
    calculateArea(){
         return Math.PI*this.redius*this.redius;
    }
    calculateperimeter(){
        return Math.PI*2*this.redius;
    }
}
class Rectangle extends Shape {
    constructor(height, width){
        super()
        this.height = height;
        this.width = width;
    }
    calculateArea(){
         return this.height*this.width;
    }
    calculateperimeter(){
        return 2*(this.height+this.width);
    }
}
class Triangle extends Shape {
    constructor(base, height, side1, side2, side3){
        super()
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    calculateArea(){
         return 1/2*this.base*this.height;
    }
    calculateperimeter(){
        return this.side1+ this.side2 + this.side3;
    }
}



const myCricle = new Crircle(5);
console.log(`Circle - Area: ${myCricle.calculateArea()}, Perimeter: ${myCricle.calculateperimeter()}`);
// Circle - Area: 78.53981633974483, Perimeter: 31.41592653589793

const rectangle = new Rectangle(4,6);
console.log(`rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculateperimeter()}`);
// rectangle - Area: 24, Perimeter: 20

const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(`rectangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculateperimeter()}`);
// rectangle - Area: 24, Perimeter: 22