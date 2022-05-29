// for

let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);

// for in

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// for of

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// for each







    