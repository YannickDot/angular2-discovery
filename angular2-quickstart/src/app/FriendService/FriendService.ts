import {Injectable} from 'angular2/angular2';

// @Injectable()
export class FriendsService {

  fetchFriends(delay: number) {
    var p = new Promise<Person[]>((resolve, reject) => {
      setTimeout(function(){
        resolve(["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"].map(s => new Person(s)));
      }, delay);
    })

    return p;
  }
}


export class Person {
  name: string;

  constructor(name:string) {
    this.name = name;
  }
}
