//const user: (string| number)[] = [1, 'Doe'];

const tuser: [number, string] = [1, 'Doe'];

let rgb:[number, number, number] = [255, 0, 0];

type User = [number, string];

const newUser: User = [2, 'Jane'];

newUser[0] = 3;
newUser.push('Doe');
console.log(newUser);