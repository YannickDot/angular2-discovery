import {Injectable} from 'angular2/angular2';

// @Injectable()
export class FriendsService {
  names: Array<Person>;
  constructor() {
    var data = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    this.names = data.map(s => new Person(s));
  }
}


export class Person {
  name: string;

  constructor(name:string) {
    this.name = name;
  }
}
