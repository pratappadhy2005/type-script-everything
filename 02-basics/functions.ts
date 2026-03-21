function add(a: number, b: number) {
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

add(1, 2);
getUpper('hello');
signUp('Prata', 'prata@example.com', '123456');
loginUser('prata@example.com');  

export {}