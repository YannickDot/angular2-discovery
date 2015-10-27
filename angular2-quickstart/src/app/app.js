var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var FriendList_1 = require('./FriendList/FriendList');
var FriendService_1 = require('./FriendService/FriendService');
var AppComponent = (function () {
    function AppComponent(friendsService) {
        var _this = this;
        this.ownername = "Yannick";
        friendsService.fetchFriends(600).then(function (friends) {
            _this.friends = friends;
        });
    }
    AppComponent.prototype.selectFriend = function (v) {
        console.log(v);
    };
    AppComponent.prototype.applyClass = function (person) {
        return { 'green': person.name[0] === 'A' };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            providers: [FriendService_1.FriendsService]
        }),
        angular2_1.View({
            directives: [FriendList_1.FriendList],
            template: "\n    <h1>My First Angular 2 App</h1>\n    <friend-list\n      [friends]=\"friends\"\n      [ownername]=\"ownername\"\n      [clickaction]=\"selectFriend\"\n      [applyclass]=\"applyClass\">\n    </friend-list>\n    "
        }), 
        __metadata('design:paramtypes', [FriendService_1.FriendsService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map