//Basic Types & Primitives
//primitives type: number, string, boolean (Number, String, Boolean - Classes)

let temp = "abc";
temp = "123";

console.log(temp);
let test1: number;
let test2: boolean;

//Complex Types :- Arrays and objects

let username: string[];
username = ["abc", "def"];
let complex1: boolean[] = [true, false];

let mySet = new Set();

let xyzName;
xyzName='abc'
console.log(xyzName);
console.log(xyzName.charAt(1));



//Type Inference

type Person = {
  id: number;
  name: string;
};

//console.log(person.name);

let obj: Person;

obj = {
  id: 1,
  name: "xyz",
};
console.log(obj);

let people: Person[] = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "Mary",
  },
];

console.log(people[0]);

//uniontypes
let xyz: string | number | boolean;

xyz = "abc";

console.log(xyz.charAt(1));

xyz = 123;

xyz = true;
console.log(xyz);

function add(a: number, b: number): number {
  return a + b;
}

function print1() {
  console.log("hello");
}

let c = add(1, 2);

c = c + 17;

console.log(c);

print1();

///Generics
function insertAtBegining<T>(array: T[], value: T) {
  const newArry = [value, ...array];
  return newArry;
}

let arry = [1, 32, 3, 4];
let result = insertAtBegining(arry, 2);
console.log(result);

let strArry = ["abc", "temp"];
let strResult = insertAtBegining(strArry, "first");
console.log(strResult);

type StudentType = {
  id: number;
  name: string;
  temp(): void;
};

let object: StudentType = {
  id: 4,
  name: "xyz",
  temp() {
    console.log("In temp function");
  },
};
