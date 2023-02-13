// 생성자 함수로 객체 만들기
function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color} 색 차가 주행 중입니다.`);
  }
}
const hyundai = new Car('hyundai', 'white');
hyundai.drive();
console.log(hyundai);

// 클래스로 객체 만들기, 인스턴스화
class ClassCar {
	constructor(brand, color) {
    	this.brand = brand;
        this.color = color;
    }
    
    drive() {
    	console.log(`${this.brand}의 ${this.color} 색 차가 주행 중입니다.`);
    }
}
const porsche = new ClassCar('porsche', 'red');
porsche.drive();
console.log(porsche);