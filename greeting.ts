class Student {
  fullName: String;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`
}

const user = new Student('Tobie', 'H', 'Tsuzuki')

document.body.innerHTML = greeter(user)
