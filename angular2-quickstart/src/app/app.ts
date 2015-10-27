import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {FriendList} from './FriendList/FriendList';
import {FriendsService, Person} from './FriendService/FriendService';

@Component({
    selector: 'my-app',
    providers: [FriendsService]
})

@View({
  directives: [FriendList],
  template: `
    <h1>My First Angular 2 App</h1>
    <friend-list
      [friends]="friends"
      [ownername]="ownername"
      [clickaction]="selectFriend">
    </friend-list>
    `
})

class AppComponent {
  ownername: string;
  friends: Array<Person>;

  constructor(friendsService: FriendsService) {
    this.ownername = "Yannick";
    this.friends = friendsService.names;
  }

  selectFriend(v) {
    console.log(v)
  }
}

bootstrap(AppComponent);
