"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
        // this.name = name;
        console.log('I am created');
    }
    Object.defineProperty(User.prototype, "name", {
        // name: string;
        get: function () {
            return this._name;
        },
        set: function (value) {
            // if(value){
            //     this._name = value;
            // } else{
            //     this._name = 'Someone';
            // }
            this._name = value ?
                value : 'Someone';
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.talk = function () {
        console.log("I am " + this.name);
    };
    return User;
}());
exports.User = User;
