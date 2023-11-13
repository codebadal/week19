class Temperature {
    constructor(){
        this.celsius = 0;
        this.fahrenheit = 32;
    }
    get getcelsius(){
        return this.celsius;
    }
    get getfahrenheit(){
        
        return this.fahrenheit;
    }

    set setcelsius(value){
        if (typeof value === "number") {
            this.celsius = value;
            this.fahrenheit = (value*9/5)+32
        } else {
            console.log("invailid input");
        }
    }
    set setfahrenheit(value){
        if (typeof value === "number") {
            this.fahrenheit = value;
            this.celsius = (value-32)*5/9
        } else {
            console.log("invailid input");
        }
    }
}

let temp = new Temperature();

console.log(` Initial Celsius: ${temp.getcelsius}°C`); // Initial Celsius: 0°C
console.log(`Initial Fahrenheit: ${temp.getfahrenheit}°F`); // Initial Fahrenheit: 32°F

temp.setcelsius = 25;

console.log(`Celsius: ${temp.getcelsius}°C`); // Celsius: 25°C
console.log(`Fahrenheit: ${temp.getfahrenheit}°F`); // Fahrenheit: 77°F

temp.setfahrenheit = 68

console.log(`Celsius: ${temp.getcelsius}°C`); // Celsius: 20°C
console.log(`Fahrenheit: ${temp.getfahrenheit}°F`); //Fahrenheit: 68°F
