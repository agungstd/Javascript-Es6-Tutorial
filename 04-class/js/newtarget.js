class Shape {
  constructor(name) {
    if (new.target !== Shape) {
      throw new TypeError("Shape must be called with the new keyword");
    }
    this.name = name;
  }

  // Add method to calculate area (abstract method)
  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented");
  }

  // Static method to check if an object is a Shape
  static isShape(obj) {
    return obj instanceof Shape;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  // Implement calculateArea for Circle
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  // Implement calculateArea for Rectangle
  calculateArea() {
    return this.width * this.height;
  }
}

try {
  const squere = new Shape("Squere");
  console.log(squere);

  // This will throw an error
  // Shape("Circle");

  const circle = new Circle("My Circle", 5);
  console.log(circle);
  console.log(`Circle area: ${circle.calculateArea()}`);

  const rectangle = new Rectangle("My Rectangle", 4, 6);
  console.log(rectangle);
  console.log(`Rectangle area: ${rectangle.calculateArea()}`);

  // Demonstrate static method
  console.log(Shape.isShape(circle)); // true
  console.log(Shape.isShape({})); // false
} catch (error) {
  console.error("An error occurred:", error.message);
}