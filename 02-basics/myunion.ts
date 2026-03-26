let score: number | string = 33;


type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  age: number;
  role: string;
};

let pratap: User | Admin = {
  name: 'prata',
  age: 25,
};

pratap = {
  name: 'prata',
  age: 25,
  role: 'admin',
};

function getDBId(id: number | string): void {
    if (typeof id === 'number') {
        id.toFixed(2);
    }

    if (typeof id === 'string') {
        id.toUpperCase();
    }
    //making sure id is a string
    console.log(`DB ID: ${id}`);
}

//Array
const data: (number | string)[] = [1, 2, '3', '4', 5];

let pi: number = 3.14;  
pi = 3.14159;


let seatAlloted: 'A1' | 'A2' | 'A3' = 'A1'; 
