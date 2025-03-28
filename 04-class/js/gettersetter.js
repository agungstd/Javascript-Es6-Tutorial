// contoh tanpa getter dan setter
class Coba {
  constructor(name) {
    this.name = name;
  }
}

let coba = new Coba("coba");
console.log(coba.name);
coba.name = "coba xxx";
console.log(coba.name);

// contoh di ES5
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.setName = function (name) {
  this.name = name;
};

var jon = new Person("Jon");
console.log(jon.getName());
jon.setName("Jon xxx");
jon.name = "Jon xxx111";
console.log(jon.getName());

class Person2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

var jon2 = new Person2("Jon");
console.log(jon2.getName());
jon2.setName("Jon xxx");
console.log(jon2.getName());

class Person3 {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    name = name.trim();
    if (name.length == 0) {
      throw new Error("Name is empty");
    }
    this._name = name;
  }
}

let jon3 = new Person3("Pojok Code");
console.log(jon3.name);
jon3.name = "Pojok Code xxx";
console.log(jon3.name);

let meeting = {
  attendance: [],
  add(attedee) {
    console.log(`Add ${attedee} to the meeting`);
    this.attendance.push(attedee);
    return this;
  },

  get latest() {
    let count = this.attendance.length;
    return count == 0 ? undefined : this.attendance[count - 1];
  },
};

meeting.add("John").add("Jane").add("Jack");
console.log(`Latest: ${meeting.latest}`);

// New example with more advanced getter and setter
class TemperatureConverter {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }

  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    this._celsius = value;
  }
}

const temp = new TemperatureConverter(25);
console.log(`Celsius: ${temp.celsius}°C`);
console.log(`Fahrenheit: ${temp.fahrenheit}°F`);

temp.fahrenheit = 98.6;
console.log(`Celsius after converting: ${temp.celsius}°C`);

// Enhanced meeting object with additional methods
const meetingRoom = {
  attendance: [],
  add(attendee) {
    this.attendance.push(attendee);
    return this;
  },
  remove(attendee) {
    const index = this.attendance.indexOf(attendee);
    if (index > -1) {
      this.attendance.splice(index, 1);
    }
    return this;
  },
  get attendeeCount() {
    return this.attendance.length;
  },
  get allAttendees() {
    return [...this.attendance];
  }
};

meetingRoom.add("Alice").add("Bob").add("Charlie");
console.log(`Total attendees: ${meetingRoom.attendeeCount}`);
meetingRoom.remove("Bob");
console.log(`Attendees after removal: ${meetingRoom.allAttendees}`);