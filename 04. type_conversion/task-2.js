// var task3 = [
//   {
//     name: 'console.log',
//     string: String(console.log),
//     number: Number(console.log),
//     boolean: Boolean(console.log),
//   },
//   {
//     name: '{ name: "Maxim" }',
//     string: String({ name: 'Maxim' }),
//     number: Number({ name: 'Maxim' }),
//     boolean: Boolean({ name: 'Maxim' }),
//   },
//   {
//     name: 'Symbol("key")',
//     string: String(Symbol('key')),
//     number: 'Cannot convert a Symbol value to a number',
//     boolean: Boolean(Symbol('key')),
//   },
//   {
//     name: 'Number',
//     string: String(Number),
//     number: Number(Number),
//     boolean: Boolean(Number),
//   },
//   {
//     name: '',
//     string: String(''),
//     number: Number(''),
//     boolean: Boolean(''),
//   },
//   {
//     name: '0',
//     string: String(0),
//     number: Number(0),
//     boolean: Boolean(0),
//   },
//   {
//     name: '-10',
//     string: String(-10),
//     number: Number(-10),
//     boolean: Boolean(-10),
//   },
//   {
//     name: '"-105"',
//     string: String('-105'),
//     number: Number('-105'),
//     boolean: Boolean('-105'),
//   },
// ];

// console.table(task3);

// 1
console.log(Number(' 1 2 3 4 5 ')); // NaN

// 2
console.log(Number('1234 5')); // NaN

// 3
console.log(Number('12345')); // 12345

// 4
console.log(String(false)); // 'false'

// 5
console.log(Boolean(0000000)); // false

// 6
console.log(Boolean(0.0000001)); // true

// 7
console.log(String(undefined)); // 'undefined'

// 8
console.log(Number('100f')); // NaN

// 9
console.log(Number('100')); // 100

// 10
console.log(Number('000001')); // 1
