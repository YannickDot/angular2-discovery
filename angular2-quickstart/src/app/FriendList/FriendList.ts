import {Component, View, NgFor, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'friend-list',
  properties: ['friends'],
})

@View({
  directives: [CORE_DIRECTIVES],
  template: `
    <p>Friends of {{name}}:</p>
    <ul>
       <li *ng-for="#name of friends">
          {{ name }}
       </li>
    </ul>
    `
})

export class FriendList {
  name: string;
  friends: Array<string>;


  constructor() {
    console.log(this.friends)

    // this.name = "Yannick";
    // this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}
