import {Component, View, NgFor, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'friend-list',
  properties: ['friends', 'ownername', 'clickaction'],
})

@View({
  directives: [CORE_DIRECTIVES],
  template: `
    <p>Friends of {{ownername}}:</p>
    <ul>
       <li *ng-for="#person of friends" (click)="clickaction(person.name)">
          {{ person.name }}
       </li>
    </ul>
    `
})


// This is a dumb component
export class FriendList {}
