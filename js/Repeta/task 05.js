// ! =============  АЛЕКСАНДР РЕПЕТА  Занятие №9. Ключевое слово this ===================================

// Петя біжить швидко, тому що він (this) намагається зловити поїзд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showName();

// !====

// console.log("[] === []: ", [] === []);
// console.log("{} === {}: ", {} === {})
// console.log(
//   "function() {} === function() {}: ",
//   function () {} === function () {}
// );

// !====

// const fnA = function () {
//     console.log('hello')
// }

// const fnB = fnA
// console.log("fnB === fnA: ", fnB === fnA);

// !====

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log("showTag -> this", this)
//     }

// }
// user.showTag()

// !====

// const foo = function () {
//     console.log("foo -> this", this)
// }
// foo()

// !====

// const showTag = function () {
//     console.log("showTag -> this", this)
//     console.log("showTag -> this.tag", this.tag);
// }
// // showTag()

// const user = {
//     tag: "Mango",
//     // showUserTag: showTag,
// }

// user.showUserTag = showTag
// console.log("user", user)
// user.showUserTag()

// !====

// const user = {
//     tag: "Mango",
//     showTag() {
//       console.log("showTag -> this", this);
//       console.log("showTag -> this.tag", this.tag);
//     }
// }
// user.showTag()
// const outerShowTag = user.showTag;
// outerShowTag()

// !====

// const user = {
//     tag: "Mango",
//     showTag() {
//       console.log("showTag -> this", this);
//       console.log("showTag -> this.tag", this.tag);
//     }
// }
// // user.showTag();

// // const xyz = user.showTag;
// // xyz()

// const invokeAction = function (action) {
//     console.log(action)

//     action()
// }

// invokeAction(user.showTag)

// !====

// const fn = function () {
//     console.log("fn -> this", this)
// }
// fn()

// !====

// const book = {
//     title: "React for beginers",
//     showThis() {
//         console.log("showTag -> this", this)
//     },
//     showTitle() {
//         console.log("showTitle -> this.title", this.title);
//     },
// }
// book.showThis()

// const outerShowThis = book.showThis;
// outerShowThis()
// const outerShowTitle = book.showTitle;
// outerShowTitle();

// !====

// const makeCangeColor = function () {
//     const changeColor = function (color) {
//         console.log('cangeColor -> this', this);
// this.color = color;
// };

// changeColor();

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;
//     sweater.updateColor('red');

//     return sweater.updateColor;
// }

// makeCangeColor()
// const swapColor = makeCangeColor();
// swapColor('blue')

// !====

// const makeCangeColor = function () {
//     const changeColor = function (color) {
//         console.log('cangeColor -> this', this);
//     };

//     return changeColor;
// }

// const updateColor = makeCangeColor();
// updateColor('yellow');

// const hat = {
//     color: "blue",
//     updateColor,
// }

// hat.updateColor("orange")

// !====

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     }
// }

// const updateCounter = function (value, operation) {
//     operation(value);
// }

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// !====

// const showThis = function (...arg) {
//     console.log(arg)
//     console.log("showThis -> this", this);
// }

// console.dir(showThis)

// showThis()

// const ObjA = {
//     a: 5,
//     b: 10,
// }
// showThis.call(ObjA, 10, 20, 30);
// showThis.apply(ObjA, [10, 20, 30]);

// !====
// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };
// changeColor.call(hat, 'orange')
// console.log(hat)

// const sweater = {
//   color: "grween",
// };
// changeColor.call(sweater, "blue");
// console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);
// changeHatColor('Red');
// console.log(hat)
// changeSweaterColor('Grey')
// console.log(sweater);

// !==================

const counter = {
  value: 0,
  increment() {
    // console.log("increment -> this", this);
    this.value += 1;
  },
  decrement() {
    // console.log("decrement -> this", this);
    this.value -= 1;
  },
};
const decrementBtn = document.querySelector(".js-decrement");
const incrementBtn = document.querySelector(".js-increment");
const valueEl = document.querySelector(".js-value");

// console.dir(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

decrementBtn.addEventListener("click", function () {
  // console.log("sweater");
  counter.decrement();
  valueEl.textContent = counter.value;
});
incrementBtn.addEventListener("click", function () {
  // console.log("hat");
  counter.increment();
  valueEl.textContent = counter.value;
});

// ! =============  АЛЕКСАНДР РЕПЕТА  Занятие №10. Прототипи та класи ===================================

// const objC = {
//  z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 3;
// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objC', objC)
// console.log('objB', objB)
// objA.z = 1000;
// console.log('objA', objA)

// console.log(objB.y)
// console.log(objB.z)

// ! ==========================

// const dummyObj = Object.create({ message: 'Это свойство объекта прототипа'});
// dummyObj.message = 'Это собственное свойство объекта';

// console.log('dummyObj', dummyObj)
// console.log(dummyObj.message)

// console.log([]);
// ! ==========================

// const Car = function (config) {
//   console.log(config);
//   //? 2. Функция вызывается в контексте созданного объекта
//   //?    т.е в this записывается ссылка на него
//   this.brand = config.brand;
//   this.model = config.model;
//   this.price = config.price;

//   //? 4. Ссылка на объект возвращается на место вызова newCar
// };

// //? 1. Если функция вызывается через new, сщздается пустой объект
// const myCarOne = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCarOne);
// const myCarTwo = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 50000,
// });
// console.log(myCarTwo);

// ! ==========================

// const Car = function ({ brand, model, price } = {}) {
//   //? 2. Функция вызывается в контексте созданного объекта
//   //?    т.е в this записывается ссылка на него
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // this.changePrice = function (newPrice) {
//   //   this.price = newPrice;
//   // };

//   //? 3. В сищйство this.__proto__ записывается ссылка на объект
//   //?   Car.prototype т.е Car.prototype это ПРОТОТИП будующего объукта (экземпляра)
//   //? 4. Ссылка на объект возвращается на место вызова newCar
// };

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this)
//   console.log('Hello :)')
// }
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice
// }

// console.log(Car.prototype)

// //? 1. Если функция вызывается через new, сщздается пустой объект
// const myCarOne = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 35000,
// });
// console.log(myCarOne);
// myCarOne.sayHi()
// myCarOne.changePrice(10000)
// const myCarTwo = new Car({
//   brand: "BMW",
//   model: "X6",
//   price: 50000,
// });
// console.log(myCarTwo);
// myCarTwo.sayHi()
// const myCarThree = new Car({
//   brand: "Audi",
//   model: "A6",
//   price: 65000,
// });
// console.log(myCarThree);
// myCarThree.sayHi()

// ! ==========================

// const User = function ({email, password} = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// }

// const mango = new User({ email: "mango@mail", password: 11111111 });

// mango.changeEmail('my-new-mail@mail.com')
// console.log(mango)

// ! ==========================

// const objA = {
//   x: 5,
// }

// console.log(objA.__proto__ === Object.prototype)

// ! ==========================

// ? 1. У каждого объекта есть свойство __proto__
// ? 2. В этом свойстве лежит ссылка на его ПРОТОТИП, т.е. другой объект
// ? 3. При создании литера... объекта, в свойство __proto__ записывается ссылка на Функция.prototype
// ? 4. Функция-конструктор это просто функция :)
// ? 5. Всю магию делает оператор new
// ? 6. Если функция создается через new, создается пустой объект
// ? 7. Функция создается в контексте созданного объекта
// ? 8. В свойство __proto__ записывается ссылка на объект Функция.prototype
// ? 9. Ссылка на объект возвращается на место вызова new Функция()

// ! ==========================

// ? СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ
// ? Статические свойства и методы доступны только на самом конструкторе
// ? В статических методах не нужен this


// console.log(Math.round(5.5))
// console.log(Math.PI)

// const User = function ({email, password} = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// }

// const mango = new User({ email: "mango@mail", password: 11111111 });

// mango.changeEmail('my-new-mail@mail.com')
// console.log(mango)

// User.message = 'Я статическое свойство, меня нет на экземплярах или в прототипе.'

// User.logInfo = function (obj){
//   console.log('User.logInfo -> obj', obj)
//   console.log(this)
//   console.log('Почта: ', obj.email)
//   console.log('Пароль: ', obj.password)
// }

// User.logInfo(mango)
// console.log(mango)
// console.dir(User)

// ? Object.keys()  статический метод

// ! ==========================


