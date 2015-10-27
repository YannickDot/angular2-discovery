// @Injectable()
var FriendsService = (function () {
    function FriendsService() {
        var data = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
        this.names = data.map(function (s) { return new Person(s); });
    }
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