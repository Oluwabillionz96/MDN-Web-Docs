class Person {

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

class Professor extends Person{
    #address;
    constructor(name, teaches,gender) {
        super(name);
        this.teaches = teaches;
        this.gender = gender;
        this.#address = this.gender.toLowerCase() === 'male' ? 'Mr' : 'Mrs';
    }

    introduceSelf() {
        console.log(`Goodday class, my name is ${this.#address} ${this.name}, and I am you ${this.teaches} teacher`);
    }

    gradePaper() {
        const grade = Math.floor(Math.random() * 11);
        console.log(`You scored ${grade} over 10 in ${this.teaches}`);
    }
}

class Student extends Person{
    #year;
    constructor(name, specialty, year) {
        super(name);
        this.specialty = specialty;
        this.#year = year;
        this.article = this.specialty.charAt(0).toLowerCase() === "a" ? "an" : "a";
    }

    introduceSelf() {
        console.log(`Goodday everyone, my name is ${this.name}, I am ${this.article} ${this.specialty} Student `);
    }

    canPlayGame() {
        return this.#year > 3;
    }
}

const teacher1 = new Professor('Tony', 'Mathematics', 'Male');
const student1 = new Student('Abraham', 'Art', 2);

