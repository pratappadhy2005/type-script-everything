function add(a: number, b: number) {
  return a + b;
}

function getUpper(str: string) {
  return str.toUpperCase();
}

function signUp(name: string, email: string, password: string) {
  return { name, email, password };
}


add(1, 2);
getUpper('hello');
signUp('Prata', 'prata@example.com', '123456');

export {}