let firstName = 'name';
console.log(
  '#firstName: ',
  Number(firstName),
  Boolean(firstName),
  String(firstName)
);

let age = '26';
console.log('#age: ', Number(age), Boolean(age), String(age));

let boolean = true;
console.log('#boolean: ', Number(boolean), Boolean(boolean), String(boolean));

let isNull = null;
console.log('#isNull: ', Number(isNull), Boolean(isNull), String(isNull));

let isUndefined = undefined;
console.log(
  '#isUndefined: ',
  Number(isUndefined),
  Boolean(isUndefined),
  String(isUndefined)
);

let isSymbol = Symbol('s');
console.log(
  '#isSymbol: ',
  //   Number(isSymbol), TypeError: Cannot convert a Symbol value to a number
  Boolean(isSymbol),
  String(isSymbol)
);

let isBigInt = 10n;
console.log(
  '#isBigInt: ',
  Number(isBigInt),
  Boolean(isBigInt),
  String(isBigInt)
);

let obj = {
  firstName: 'Mark',
  age: 26,
  toString: function () {
    return `My name is ${this.firstName}, ${this.age} year`;
  },
};
/* String(obj) - объектная оболочка String вызывает метод toString у данного объекта, который обязательно возвращает примитив.
Если у конкретного объекта(он же находиться в контексте(объекте this)) не существует явного метода toString,
то String(obj) возвращает [Object, object]. Проверяющего прошу ответить, верно ли данное утверждение)?
*/
console.log('#obj: ', Number(obj), Boolean(obj), String(obj));
