class User {
_name = "";
constructor(name)
{
    this._name = name;
}
sayHi() {
console.log(this._name);
}
}
var user = new User("Miguelle");
user.sayHi();