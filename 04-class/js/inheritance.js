// conth dengan ES5
function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log("walking on " + this.legs + " legs");
};

function Bird(legs) {
  Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

// Menambahkan metode khusus untuk Bird
Bird.prototype.fly = function() {
  console.log("Flying with " + this.legs + " legs");
};

// Menambahkan method static pada Animal
Animal.isAnimal = function(obj) {
  return obj instanceof Animal;
};

// Membuat instance dan menguji metode
let myAnimal = new Animal(4);
myAnimal.walk();

let myBird = new Bird(2);
myBird.walk();
myBird.fly();

console.log(Animal.isAnimal(myAnimal)); // true
console.log(Animal.isAnimal(myBird));   // true

// Contoh pewarisan tambahan dengan ES5
function Mammal(legs, furColor) {
  Animal.call(this, legs);
  this.furColor = furColor;
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.makeSounds = function() {
  console.log("Making mammal sounds");
};

let dog = new Mammal(4, "brown");
dog.walk();
dog.makeSounds();
console.log(dog.furColor);