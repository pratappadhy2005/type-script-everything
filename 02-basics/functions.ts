function add(a: number, b: number): number {
  return a + b;
}

function getUpper(str: string) {
  return str.toUpperCase();
}

function signUp(name: string, email: string, password: string) {
  return { name, email, password };
}

var loginUser = (email: string, password?: string, name: string = email.split('@')[0]) => {
  return { email, password, name };
}

let myValue = add(1, 2);
getUpper('hello');
signUp('Prata', 'prata@example.com', '123456');
loginUser('prata@example.com');  

// Union Type
function getValue(myVal: number): number | boolean {
    if (myVal > 0) {
        return myVal;
    } else {
        return true;
    }
}

let myResult = getValue(10);
console.log(myResult);

export {}