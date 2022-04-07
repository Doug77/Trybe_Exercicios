export class Person {
  private name: string;
  private birthDate: string;

  constructor(name: string, birthDate: string) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get namePerson(): string {
    return this.name;
  }

  set namePerson(name: string) {
    if (name.length >= 3) {
      this.name = name;
    }
  }

  set birthDatePerson(date: string) {
    this.birthDate = date;
  }
}