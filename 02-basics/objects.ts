const user = {
    name: 'Prata',
    age: 30,
    email: 'prata@example.com',
    isActive: true
}


function createUser({ name, age, email, isActive }: { name: string, age: number, email: string, isActive: boolean }) : string{
    return `User ${name} is ${age} years old and email is ${email}. Is active: ${isActive}`;
}

let userInfo = { name: 'Prata', age: 30, email: 'prata@example.com', isActive: true, courses: [] };
console.log(userInfo);
createUser(userInfo);

function createCourse({ name, price, isFree }: { name: string, price: number, isFree: boolean }) : { name: string, price: number, isFree: boolean } {
    return { name, price, isFree };
}   

createCourse({ name: 'TypeScript', price: 100, isFree: true });

//Type aliases
type User = {
    name: string,
    age: number,
    email: string,
    isActive: boolean,
    courses: Course[]
}

type Course = {
    name: string,
    price: number,
    isFree: boolean
}

function  createUserWithType(user: User) : User {
    return { ...user, courses: [...user.courses, createCourse({ name: 'TypeScript', price: 100, isFree: true })] };
}

//Optional and read only
type Employee = {
    readonly _id: number,
    name: string,
    age?: number,
    email: string,
    isActive: boolean,
}

let employee: Employee = {
    _id: 1001,
    name: 'Prata',
    email: 'prata@example.com',
    isActive: true,
}
employee._id = 1002; // Error: Cannot assign to '_id' because it is a read-only property.

function createEmployee({ _id, name, age, email, isActive }: Employee) : Employee {
    return { _id, name, age: age || 0, email, isActive };
}

createEmployee(employee)

//Combine types
type cardNumber = {
    cardNumber: string,
}

type cardCVV = {
    cardCVV: string,
}

type cardExpiry = {
    cardExpiry: string,
}

type cardDetails = cardNumber & cardCVV & cardExpiry;

// or
type cardDetailsOr = cardNumber | cardCVV | cardExpiry;

export {}