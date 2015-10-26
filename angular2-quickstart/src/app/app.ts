import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {FriendList} from './FriendList/FriendList';

@Component({
    selector: 'my-app'
})

@View({
  directives: [FriendList],
  template: `
    <h1>My First Angular 2 App</h1>
    <friend-list [friends]="names"></friend-list>
    `
})

class AppComponent {
  name: string;
  names: Array<string>;

  constructor() {
    this.name = "Yannick";
    this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}

bootstrap(AppComponent);
