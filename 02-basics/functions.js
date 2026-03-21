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
add(1, 2);
getUpper('hello');
signUp('Prata', 'prata@example.com', '123456');
