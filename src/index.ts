// to get rid of the error:
// Cannot redeclare block-scoped variable 'age'.ts
export {}

console.log("hello world");

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------


// to compile typescript file

// in terminal, 
// command: tsc index.ts
// this compiles index.ts
//and creates a new file called index.js

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

//to create configuration file for tpescript compiler

// in terminal, 
// command: tsc --init

// after creating and setting up configuration file
//all .ts files can be compiled at the same time using
//commmand : tsc

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

let age : number = 20;
//age = "a"; //Type 'string' is not assignable to type 'number'.

if(age < 15) age += 15;
console.log("age : " + age);

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

// Built in types

// Javascript - number, string, boolean, null, undefined, object
// Typescript - anhy, unknown, never, enum, tuple

// note : Typescript also includes Javascript built in types

//explicitly annotating the type
let sales : number = 123_456;
let course : string = 'TypeScript';
let is_published : boolean = true;

//implicitly annotating the type
let rollNumber = 10;
//typescript automatically figures out the variable type based on variable value
//hover over the variable name to see : //let rollNumber: number

let food: string; //let food: string
let snacks; //let snacks: any

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------


// any

let level; //let level: any
level = 1;
level = "a";
//by using "any" type,
//we lose the type checking benefit of typescript
//so, avoid "any" as much as possible

// error: Parameter 'document' implicitly has an 'any' type
// function render(document) {
//     console.log(document);    
// }

function render(document : any) {
    console.log(document);    
}
render("rendering document");

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

//arrays

let rollNumbersArray = [1,2,3,4,5]
//let rollNumbersArray: number[]

rollNumbersArray.forEach(element => console.log(element.toString()))
//because typescript knows that all the element of 
//this array(eg: rollNumbersArray) has elements of "number" type
//it shows method suggestions for elements(eg: element.toString() )

let myArray = [1,"one", true ]
//let myArray: (string | number | boolean)[]


//let numbersArray: number[] = [1,2,3,"three"]
//Type 'string' is not assignable to type 'number'

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

//Tuples

//Tuples are fixed length arrays
//Each element can have its own type
//but since tuples are compiled
//into normal arrays we can use arrays.push()
//but not recommended

//mostly use only two elements in tuple

//let user : [number, string] = [1, 'Mosh', true]
//Type '[number, string, boolean]'
//is not assignable to type '[number, string]'.

let user : [number, string] = [1, 'Mosh']

console.log("user : " + user);
console.log(user);


//automatically detects what methods are applicable
//for each element based on the type
console.log("user[0].toString() : " + user[0].toString());
console.log("user[1].charAt(0) : " + user[1].charAt(0));

user.push(2)
user.push("Brad")

// user.push(true);
//Argument of type 'boolean'
//is not assignable to parameter of type 'string | number'

console.log("user : " + user);
console.log(user);


//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------


//enum

//enum - a list of related constants
//like enum in JAVA


//An enum is a special "class" that 
//represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric.


//-----------------------------------------------------------------------

//Numeric Enums - Default
//By default, enums will initialize the first value to 0
//and add 1 to each additional value:

enum CardinalDirections {
    North,
    East,
    South,
    West
}

console.log("CardinalDirections : " + CardinalDirections);
console.log(CardinalDirections);
console.log("CardinalDirections.North : " + CardinalDirections.North);

//-----------------------------------------------------------------------

//Numeric Enums - Initialized
//You can set the value of the first numeric enum
//and have it auto increment from that

enum Medals {
    Gold = 1,
    Silver,
    Bronze
}

console.log("Medals : " + Medals);
console.log(Medals);
console.log("Medals.Gold : " + Medals.Gold);

//-----------------------------------------------------------------------

//Numeric Enums - Fully Initialized
//You can assign unique number values for each enum value.
//Then the values will not incremented automatically.

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log("StatusCodes : " + StatusCodes);
console.log(StatusCodes);
console.log("StatusCodes.NotFound : " + StatusCodes.NotFound);

//-----------------------------------------------------------------------

//String Enums
//Enums can also contain strings.
//This is more common than numeric enums,
//because of their readability and intent.

enum NEWS {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };

console.log("NEWS : " + NEWS);
console.log(NEWS);
console.log("NEWS.North : " + NEWS.North);

//-----------------------------------------------------------------------

//as we used const for declaration
//the code for this enum is simplified in .js file

const enum Size {
    Small = 1,
    Medium,
    Large
}

let mySize : Size = Size.Medium
console.log("mySize : " + mySize);



//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

//Functions

//--------------------------------------------

function sayHello() {
    console.log("hello");    
}
//function sayHello(): void

console.log("sayHello() :");

sayHello();

//--------------------------------------------

// function calculateTax1(income) {
//     return income * 10/100;
// }
// console.log("using calculateTax1 : " + calculateTax1(100_000));

//error : Parameter 'income' implicitly has an 'any'
//(parameter) income: any

//--------------------------------------------

function calculateTax2(income : number) {
    return income * 20/100
}
//automatically figures out return type is number
//function calculateTax2(income: number): number

console.log("using calculateTax2 : " + calculateTax2(100_000));

//--------------------------------------------

function calculateTax3(income : number) : number {
    return income * 30/100
}
console.log("using calculateTax3 : " + calculateTax3(100_000));

//--------------------------------------------

// function calculateTax4(income : number)  {
//     //let x;
//     //when "noUnusedLocals": true, in config file
//     //error : 'x' is declared but its value is never read.     
//     if(income < 50_000) {
//         return income * 10/100;
//     }
// }

// when "noImplicitReturns": true in config file
// warning : Not all code paths return a value

// console.log("using calculateTax4 : " + calculateTax4(100_000));
//logs ...  using calculateTax4 : undefined
//because by default javascript returns "undefined" for implicit returns

//--------------------------------------------


// function calculateTax5(income : number) : number {
//     if(income < 50_000) {
//         return income * 10/100;
//     }
// }
// // error : Function lacks ending return statement 
// // and return type does not include 'undefined'.

// console.log("using calculateTax5 : " + calculateTax5(100_000));

//--------------------------------------------

//"noUnusedParameters": true,

function sayNameAge(name: string, age: number) {
    console.log(name + " is " + age);    
}
sayNameAge("John", 20)

// sayNameAge("John") 
// error : Expected 2 arguments, but got 1
// sayNameAge("John", 20, "football")
//Expected 2 arguments, but got 3

//--------------------------------------------

function calculateTax_Year(income:number, taxYear = 2023) : number {
    if(taxYear < 2023) return income * 10/100;
    else return income * 20/100;
}

console.log("using calculateTax_Year using default taxYear: " + calculateTax_Year(100_000));
console.log("using calculateTax_Year: " + calculateTax_Year(100_000, 2020));


//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

//object

let student = {id:1};
//student.name = "Mosh"
//Property 'name' does not exist on type '{ id: number; }'

let person : {
    readonly id: number, //here, id is readonly
    name: string,
    age: number,
    favFood? : string, //here, favFood is optional
    sayNameAge: (name: string, age: number) => void
} = {
    id:1,
    name: "Brad",
    age:40,
    sayNameAge: (name: string, age: number) => {
        console.log(name + " is " + age);        
    }
}

console.log("person.id = " + person.id);
console.log("person.name = " + person.name);
console.log("person.age = " + person.age);
console.log("person.favFood = " + person.favFood);

sayNameAge(person.name, person.age);

//person.id=2; //Cannot assign to 'id' because it is a read-only property.
person.name = "Mike Dane"
person.age = 30;
person.favFood = "ice cream"

console.log("person.id = " + person.id);
console.log("person.name = " + person.name);
console.log("person.age = " + person.age);

console.log("person.favFood = " + person.favFood);

sayNameAge(person.name, person.age);



//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

// Advanced Types

    //  Type aliases - to reuse types and simplify code
    //  Unions and intersections - to combine types
    //  Type narrowing
    //  Nullable Types
    //  The unknown type
    //  Never type

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

// Type Aliases

// instead of this code

let employee : {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);        
    }
}


//we can use type aliases

type Employee_New = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee_1 : Employee_New = {
    id: 1,
    name: 'Adrian',
    retire: (date: Date) => {
        console.log(date);        
    }
}
  
let employee_2 : Employee_New = {
    id: 2,
    name: 'GSP',
    retire: (date: Date) => {
        console.log(date);        
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

// Union Types
// we can give a variable or a function parameter more than one type

let height: number | string;

function kgToLbs(weight: number | string) : number {
    //weight.
    // only suggests methods common to string type and number type
    // so we use "Type narrowing"

    if(typeof weight === 'number') {
        //here, type is narrowed down to number
        //so all methods related to number type are shown
        return weight * 2.2;
    }
    else {
        //here, type is narrowed down to string
        //so all methods related to string type are shown
        return parseInt(weight) * 2.2;
    }
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

//Intersection types

type Draggable = {
   drag: () => void
}

type Resizable = {
    resize: () => void
}

type UI_Widget = Draggable & Resizable;

let textBox: UI_Widget = {
    drag: () => {},
    resize: () => {}
}

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

//Literal Types (exact or specific)

let myNumber : 1 = 1;
//myNumber = 2;//Type '2' is not assignable to type '1'

let quantity : 50 | 100 = 50;
quantity = 100;
//quantity = 3; //Type '3' is not assignable to type '50 | 100'

type NumberOfItems = 20 | 40;
let nos: NumberOfItems = 20;
nos = 40;
//nos = 15; //Type '15' is not assignable to type 'NumberOfItems'

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

// Nullable types

function greet(name:string) {
    console.log(name.toUpperCase());    
}

greet("John")
//greet(null)
//Argument of type 'null' is not assignable to parameter of type 'string'
//greet(undefined)
//Argument of type 'undefined' is not assignable to parameter of type 'string'

function welcome(name:string | null | undefined) {
    if(name)
        console.log(name.toLowerCase());  
    else
        console.log("Hola");
          
}

welcome("Brad")
welcome(null)
welcome(undefined)

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------


// Optional Chaining

type Customer = {
    birthday? : Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday : new Date()}
}

let customer1 = getCustomer(0);


if(customer1 !== null && customer1 !== undefined)
console.log(customer1.birthday)

// the above code is correct but we can shorten it

// Optional property access operator
console.log(customer1?.birthday?.getFullYear());

let customer2 = getCustomer(1);

if(customer2 !== null && customer2 !== undefined)
console.log(customer2.birthday)

console.log(customer2?.birthday?.getFullYear())


//--------------------------------------------------

//general examples for understanding
let friendsArray = ["Brad", null, undefined]

console.log(friendsArray[0]);
console.log(friendsArray[1]);
console.log(friendsArray[2]);

let studentsArray = ["Sonny"]

console.log(studentsArray[0]);
console.log(studentsArray[1]);

//--------------------------------------------------

let dummyArray = null;

//console.log(dummyArray[0]);
//error : 'dummyArray' is possibly 'null'

// Optional element access operator
console.log(dummyArray?.[0]);


// Optional call

let sayMessage : any = (message : string) => console.log(message);

sayMessage("hello world")

let sayHi: any = null;
//sayHi("Hi")
//runtime error : sayHi is not a function

sayHi?.("Hi");


