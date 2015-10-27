// @Injectable()
var FriendsService = (function () {
    function FriendsService() {
    }
    FriendsService.prototype.fetchFriends = function (delay) {
        var p = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"].map(function (s) { return new Person(s); }));
            }, delay);
        });
        return p;
    };
    return FriendsService;
})();
exports.FriendsService = FriendsService;
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
})();
exports.Person = Person;
//# sourceMappingURL=FriendService.js.map