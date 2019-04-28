// let something: any;
// let anything: any = 0;
// let age = 0;
// let name: string;
// let isloading: boolean;
// let friends: string[];
// const enum Color {Red,Green,Bule};
// const myColor: Color = Color.Red;
// =========================================================

// let myValue;
// myValue = 'This is my string';
// (<string>myValue).length
// (myValue as string)
// การใช้ any กับการประกาศ type ออกมา
// =========================================================

// const MyName = 'John Snow';
// console.log('My name is' + MyName);
// console.log(`My name is ${MyName} Nice to meet you. `);
// =========================================================

// const sum = function(num1, num2): number {
//     return num1 + num2;
// }

// const sum2 = (num1, num2): number => {
//     return num1 + num2;
// }

// const log = msg => console.log(msg);
// =========================================================

// const shoppingCart = [100, 25, 50, 35];
// const result = shoppingCart.map((item) => item * 1.07);
// console.log(result);
// =========================================================

// name, age, isAdmin
class User {
    get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value ?
        value : 'Supanat' ;
    }

    constructor(private _name: string) {
        
    }
    talk() {
        console.log(`My name is ${this.name}`);
    }
}
const myUser = new User('Supant');
console.log(myUser);
