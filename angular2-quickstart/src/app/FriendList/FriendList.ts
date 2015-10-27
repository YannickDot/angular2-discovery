import {Component, View, NgFor, CORE_DIRECTIVES} from 'angular2/angular2';
import {FriendPipe} from '../FriendPipe/FriendPipe';

@Component({
  selector: 'friend-list',
  properties: ['friends', 'ownername', 'clickaction', 'applyclass']
})

@View({
  directives: [CORE_DIRECTIVES],
  pipes: [FriendPipe],
  styleUrls: ['app/FriendList/friend-list.css'],
  templateUrl: 'app/FriendList/friend-list.html',
  // template: `
  //   <p class="title">Friends of {{ownername}} :</p>
  //   <ul class="friends">
  //      <li *ng-for="#person of friends"
  //          (click)="clickaction(person.name, $event)"
  //          [ng-class]="applyclass(person)">
  //         {{ person.name | friendTransform: 0 }}
  //      </li>
  //   </ul>
  //   `,
  // styles:[`
  //   .friends { font-size: 16px }
  //   .title {
  //     font-size: 22px;
  //     color: red;
  //   }
  //   .green {
  //     color: green;
  //   }
  // `]
})


// This is a dumb component
export class FriendList {}
