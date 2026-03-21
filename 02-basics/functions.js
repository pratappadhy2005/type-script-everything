"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function getUpper(str) {
    return str.toUpperCase();
}
function signUp(name, email, password) {
    return { name: name, email: email, password: password };
}
var loginUser = function (email, password, name) {
    if (name === void 0) { name = email.split('@')[0]; }
    return { email: email, password: password, name: name };
};
var myValue = add(1, 2);
getUpper('hello');
signUp('Prata', 'prata@example.com', '123456');
loginUser('prata@example.com');
function getValue(myVal) {
    if (myVal > 0) {
        return myVal;
    }
    else {
        return true;
    }
}
var myResult = getValue(10);
console.log(myResult);
