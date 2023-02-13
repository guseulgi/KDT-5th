// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }

//   showSpec() {
//     console.log(`이 차는 ${this.brand}의 ${this.color}색입니다.`);
//   }
// }

// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }

//   showSpec() {
//     super.showSpec();
//     console.log(`이 차는 ${this.brand}의 ${this.color}색이며, ${this.fuel}로 움직입니다.`);
//   }

//   showFuel() {
//     console.log(`이 차는 ${this.fuel}의 동력으로 움직입니다.`);
//   }
// }

// const tesla = new ElecCar('tesla', 'red', 'electricity');
// tesla.showSpec();
// const hyundai = new Car('hyundai', 'blue');

// console.log(hyundai instanceof Car);
// console.log(tesla instanceof Car);


class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height; 
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  // getArea() {
  //   return super.getArea();
  // }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return this.width * this.height / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

let rect = new Rectangle(3, 4);
let tri = new Triangle(2, 3);
let cir = new Circle(6);

console.log(rect.getArea());
console.log(tri.getArea());
console.log(cir.getArea());