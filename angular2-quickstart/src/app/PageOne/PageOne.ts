import {Component, View} from 'angular2/angular2';
import {FriendList} from '../FriendList/FriendList';
import {FriendsService, Person} from '../FriendService/FriendService';

@Component({
    selector: 'page-one',
    providers: [FriendsService]
})

@View({
  directives: [FriendList],
  template: `
    <p>Page ONE</p>
    <friend-list
      [friends]="friends"
      [ownername]="ownername"
      [clickaction]="selectFriend"
      [applyclass]="applyClass">
    </friend-list>
    `
})

export class PageOne {
  ownername: string;
  friends: Array<Person>;

  constructor(friendsService: FriendsService) {
    this.ownername = "Yannick";
    friendsService.fetchFriends(600).then((friends) => {
      this.friends = friends
    })
  }

  selectFriend(v) {
    console.log(v)
  }

  applyClass(person: Person) {
    return { 'green' : person.name[0] === 'A'}
  }
}
