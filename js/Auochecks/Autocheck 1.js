// ! ===== Exercise 1 ======
// ? ===== Theory =======
Змінні використовуються для зберігання даних. У кожної змінної є ідентифікатор (назва змінної). Значення кожної змінної зберігається в оперативній пам'яті.
Змінну можна уявити як коробку з написом (ім'я змінної), в якій щось знаходиться (значення змінної).

<ключове слово> <назва змінної> = <значення>

Оголошення змінної починається з ключового слова const. Така змінна має бути одразу ініціалізована початковим значенням, і такій змінній не можна надати інше значення після її ініціалізації.
Увага
Створення змінної без ключового слова const призведе до помилки.

const age = 20;
const userName = "Mango";
const socialProfileTag = "@gluck";
const totalWorkerSalary = 4052;

В JavaScript назва змінної записується в camelCase-нотації. Перше слово пишеться маленькими буквами, а кожне наступне починається з великої. Назви змінних чутливі до регістру, тобто user, usEr і User - це різні змінні.

// TODO =================
Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:

    назва - рядок "Droid";
    ціна за штуку - число 2000.
// TODO =================
// Change code below this line
const productName = "Droid"

const pricePerItem = 2000

// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

// ! ===== Exercise 2 ======
// ? ===== Theory =======
Для того щоб оголосити змінну, якій у майбутньому можна буде присвоїти нове значення, використовується ключове слово let. Створення змінної без ключового слова let або const призведе до помилки.

let age = 5;
age = 10;

let username = "Mango";
username = "Poly";

Спроба звернутися до змінної за ім'ям до її оголошення, викличе помилку.
Наприклад, не можна намагатися прочитати або змінити значення змінної до її оголошення:

// ❌ Неправильно, буде помилка
age = 15; // ReferenceError: Cannot access 'age' before initialization
console.log(age); // ReferenceError: age is not defined

// Оголошення змінної age
let age = 20;

// ✅ Правильно, звертаємося після оголошення
age = 25;
console.log(age); // 25

// TODO =================
Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.
// TODO =================
let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
productName = "Repair droid";
pricePerItem = 3500;

// ! ===== Exercise 3 ======
// ? ===== Theory =======
В JavaScript змінна не асоціюється з будь-яким типом даних, тип є у її значення. Тобто змінна може зберігати значення різних типів.

    Number - цілі числа і числа з плаваючою комою (крапкою).
    String - рядки, послідовність від нуля або більше символів. Рядок починається і закінчується одинарною ' або подвійними лапками ".
    Boolean - логічний тип даних, прапорці стану. Всього два значення: true і false. Наприклад, на питання, чи увімкнено світло в кімнаті, можна відповісти так (true) або ні (false).

// Числа
const age = 20;
const salary = 3710.84;

// Рядки
const name = "Mango";
const description = "JavaSript essentials";

// Булі
const isModalOpen = true;
const isLoggedIn = false;

// TODO =================
Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

    topSpeed - число 160.
    distance - число 617.54.
    login - рядок "mango935".
    isOnline - буль true.
    isAdmin - буль false.
// TODO =================
// Change code below this line
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
let isOnline = true;
let isAdmin = false;

// ! ===== Exercise 4 ======
// ? ===== Theory =======
Призначення, функціонал і пріоритет (порядок) операцій нічим не відрізняються від шкільного курсу алгебри. Оператори повертають значення як результат виразу.

const x = 10;
const y = 5;

// Додавання
console.log(x + y); // 15

// Віднімання
console.log(x - y); // 5

// Множення
console.log(x * y); // 50

// Ділення
console.log(x / y); // 2

Корисно
Важливо запам'ятати правильне іменування складових алгебраїчного виразу: +, -, * і / називаються операторами, а те, на чому вони застосовуються (числа) - операнди.

// TODO =================
Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

    Оголошена змінна pricePerItem
    Значення змінної pricePerItem - це число 3500
    Оголошена змінна orderedQuantity
    Значення змінної orderedQuantity - це число 4
    Оголошена змінна totalPrice
    Значення змінної totalPrice - це число 14000
    Використаний оператор *
// TODO ================
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

// ! ===== Exercise 5 ======
// ? ===== Theory =======
Шаблонні рядки — це альтернатива конкатенації зі зручнішим синтаксисом. Шаблонний рядок береться у зворотні (скісні) лапки, замість подвійних або одинарних, і може містити місцезаповнювачі, які позначаються знаком долара і фігурними дужками - ${вираз}.

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Ласкаво просимо ${guestName}, ви заселені у номер ${roomNumber}`;

// TODO =================
Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits". Де <назва товару> і <ціна товару> — це значення змінних productName і pricePerItem. Використовуй синтаксис шаблонних рядків.
// TODO =================
const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem } credits`

// ! ===== Exercise 6 ======
// ? ===== Theory =======
// TODO =================
Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

    pricePerDroid - ціна одного дроїда, значення 800
    orderedQuantity - кількість дроїдів у замовленні, значення 6
    deliveryFee - вартість доставки, значення 50
    totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
    message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
// TODO =================
// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// ! ===== Exercise 7 ======
// ? ===== Theory =======
Функція - це підпрограма, незалежна частина коду, призначена для багаторазового виконання конкретної задачі з різними початковими значеннями.
Функцію можна уявити як чорний ящик — вона отримує щось на вході (дані), і повертає щось на виході (результат виконання коду всередині неї).

// 1. Оголошення функції multiply
function multiply() {
  // Тіло функції
  console.log("multiply function invocation");
}

// 2. Виклики функції multiply
multiply(); // multiply function invocation
multiply(); // multiply function invocation
multiply(); // multiply function invocation

Оголошення функції починається з ключового слова function, за яким йде її ім'я — дієслово, що відповідає на питання «Що зробити?» і пара круглих дужок. Тіло функції береться у фігурні дужки {} і містить інструкції, які необхідно виконати під час її виклику. Потім, коли необхідно, функція викликається за допомогою імені та пари круглих дужок.

// TODO =================
Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.
// TODO =================
// Change code below this line
function sayHi() {
  console.log ("Hello, this is my first function!")
}
sayHi()

// ! ===== Exercise 8 ======
// ? ===== Theory =======
В круглих дужках після імені функції йдуть параметри - перелік даних, які функція очікує під час виклику.
Параметри - це локальні змінні, доступні тільки у тілі функції. Вони розділяються комами. Параметрів може бути декілька або їх взагалі може не бути, тоді записуються просто порожні круглі дужки.
Під час виклику функції, в круглих дужках можна передати аргументи - значення для оголошених параметрів функції.

// 1. Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

// 2. Передача аргументів
multiply(2, 3, 5); // Результат множення дорівнює 30
multiply(4, 8, 12); // Результат множення дорівнює 384
multiply(17, 6, 25); // Результат множення дорівнює 2550

Порядок передачі аргументів повинен відповідати порядку оголошених параметрів: значення першого аргументу буде присвоєно першому параметру, другого аргументу - другому параметру тощо.

// TODO =================
Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.
Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.
// TODO =================
// Change code below this line
function add(a, b, c) {
    
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// ! ===== Exercise 9 ======
// ? ===== Theory =======
Оператор return використовується для передачі значення з тіла функції у зовнішній код. Коли інтерпретатор зустрічає return, він відразу ж виходить з функції (припиняє її виконання), і повертає вказане значення у те місце коду, де функція була викликана.

function multiply(x, y, z) {
  console.log("Код до return виконується звичайним чином");
  // Повертаємо результат виразу множення
  return x * y * z;

  console.log("Цей лог ніколи не виконається, він стоїть після return");
}

// Результат роботи функції можна зберегти у змінну
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550

Оператор return без явно вказаного значення повертає спеціальне значення undefined. За відсутності return у тілі функції, вона все одно поверне undefined.

// TODO =================
Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.
// TODO =================
function add(a, b, c) {
  // Change code below this line
return a + b + c;
  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// ! ===== Exercise 10 ======
// ? ===== Theory =======
// TODO =================
Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
    name - назва товару
    price - ціна товару

Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.
Увага
Зверни увагу на те, що в коді відсутній виклик функції makeMessage. З цього завдання і далі ми самі будемо викликати твої функції і перевіряти те, як вони працюють. Результат наших перевірок ти побачиш у блоці Результати під редактором коду.
// TODO =================
function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};

// ! ===== Exercise 11 ======
// ? ===== Theory =======
// TODO =================
Функція calculateTotalPrice рахує і повертає загальну суму покупки. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

    orderedQuantity - кількість одиниць товару в замовленні;
    pricePerItem - ціна однієї одиниці товару.

Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.
// TODO =================
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;
  // Change code above this line
  return totalPrice;
};

// ! ===== Exercise 12 ======
// ? ===== Theory =======
// TODO =================
Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

    orderedQuantity - кількість дроїдів у замовленні
    pricePerDroid - ціна одного дроїда
    deliveryFee - вартість доставки

Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.
// TODO =================
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
  // Change code above this line
  return message;
}

// ! ===== Exercise 13 ======
// ? ===== Theory =======
Використовується для порівняння двох значень. Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

    > - більше
    < - менше
    >= - більше або дорівнює
    <= - менше або дорівнює

const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false

// TODO =================
Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.
// TODO =================
function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;
  // Change code above this line
  return passed;
}

// ! ===== Exercise 14 ======
// ? ===== Theory =======
«Нестрогі» оператори == і != виконують перетворення типів значень, що порівнюються, що може призвести до помилок, особливо у початківців.

// ❌ Погано, виконується приведення типів
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

Тому для перевірки рівності або нерівності двох значень використовуються оператори === (строга рівність) і !== (строга нерівність), які не виконують приведення типів операндів.

// ✅ Добре, приведення типів не виконується
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

// TODO =================
Функція isValidPassword (password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки - буль true або false. Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. Введений пароль передається у параметр password.
Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.
// TODO =================
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;
  // Change code above this line
  return isMatch;
}

// ! ===== Exercise 15 ======
// ? ===== Theory =======
Розгалуження використовуються для виконання різного коду, залежно від умови. Принцип роботи простий - результат виразу в умові блоку if приводиться до буля true або false.

if (умова) {
  // тіло if
} else {
  // тіло else
}

Якщо умова приводиться до true, то виконується код у фігурних дужках тіла if, а блок else ігнорується.

let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100

Якщо умова приводиться до false, код блоку if буде пропущений, і виконається код у фігурних дужках після блоку else.

let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0

// TODO =================
Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.

    Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
    В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".
// TODO =================
function checkAge(age) {
  let message;

  if (age >= 16) { // Change this line
    
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }
  return message;
}

// ! ===== Exercise 16 ======
// ? ===== Theory =======
// TODO =================
Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

    available - загальна кількість товарів на складі
    ordered - одиниць товару в замовленні

Використовуючи розгалуження, доповни код функції таким чином, що:

    Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
    В іншому випадку записується рядок "Order is processed, our manager will contact you.".

// TODO =================
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered > available) {
   message = "Not enough goods in stock!";
}
  else {
    message = "Order is processed, our manager will contact you.";
  }
  // Change code above this line
  return message;
}

// ! ===== Exercise 17 ======
// ? ===== Theory =======
Комбіновані оператори - це коротший спосіб присвоїти змінній нове значення, ґрунтуючись на її попередньому значенні.
Будемо збільшувати значення змінної age на одиницю від попереднього, імітуючи оновлення віку після дня народження користувача.

let age = 25;
// Класичний запис
age = age + 1;
console.log(age); // 26

Спочатку виконується права частина виразу. Замість age підставляється 25, виконується операція додавання, і у змінну age записується 26.
Виконаємо рефакторинг операції оновлення віку, використовуючи комбінований оператор присвоєння з додаванням.

let age = 25;
// Просто коротший запис, працює так само
age += 1;
console.log(age); // 26

// TODO =================
Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням.
// TODO =================
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

// ! ===== Exercise 18 ======
// ? ===== Theory =======
// TODO =================
Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.
Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

    pricePerDroid - ціна одного дроїда
    orderedQuantity - кіл-сть замовлених дроїдів
    customerCredits - сума коштів на рахунку клієнта

Доповни її наступним функціоналом:

    Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
    Додай перевірку, чи зможе клієнт оплатити замовлення:
        якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
        в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".
// TODO =================
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  }
  else {
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - pricePerDroid * orderedQuantity} credits left`
  }
  // Change code above this line
  return message;
}

// ! ===== Exercise 19 ======
// ? ===== Theory =======
Конструкція if...else може перевірити і зреагувати на виконання або невиконання тільки однієї умови.

let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}
console.log(cost); // 100

Блок else...if дозволяє додати після else ще один оператор if з умовою. В кінці ланцюжка може бути класичний блок else, який виконається тільки у разі, коли жодна з умов не приведеться до true.

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}
console.log(cost); // 500

За першої ж задовільної умови перевірки припиняться і виконається тільки тіло відповідного блоку if. Тому подібний запис потрібно читати як: «шукаю перше виконання умови, ігнорую все інше».

// TODO =================
Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

    Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
    Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
    Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".
// TODO =================
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

// ! ===== Exercise 20 ======
// ? ===== Theory =======
// TODO =================
Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

    available - доступна кількість товарів на складі
    ordered - одиниць товару в замовленні

Використовуючи розгалуження, доповни код функції таким чином, що:

    Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message присвоюється рядок "There are no products in the order!".
    Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
    В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".
// TODO =================
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) {
    message = "There are no products in the order!"
  }
  else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!"
  }
  else {
    message = "The order is accepted, our manager will contact you"
  }
  // Change code above this line
  return message;
}

// ! ===== Exercise 21 ======
// ? ===== Theory =======
Логічні оператори використовуються для перевірки умов з багатьма виразами, наприклад у розгалуженнях.
Оператор && приводить всі операнди до буля і повертає значення одного з них. Лівий операнд, якщо його можна привести до false, і правий - в інших випадках.

вираз && вираз

У наступному прикладі обидві умови повернуть true, тому результатом всього виразу буде true - повернеться значення правого операнда.

const age = 20;
console.log(age > 10 && age < 30); // true && true -> true

Якщо хоча б один з операндів буде приведений до false, результатом виразу буде цей операнд.

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false

Тобто логічне «І» запинається на хибності і повертає те, на чому запнувся або останній операнд.

console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(3 && false); // false
console.log(false && 3); // false
console.log(3 && true); // true
console.log(true && 3); // 3

Корисно
Запам'ятайте шість значень, які в булевому перетворенні приводяться до `false`: `0`, `NaN`, `null`, `undefined`, порожній рядок `""` або `''` і саме значення `false`. Абсолютно все інше приводиться до `true`.

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ''
console.log("Mango" && ""); // true && false -> ''
console.log("Mango" && "Poly"); // true && true -> 'Poly'
console.log("Poly" && "Mango"); // true && true -> 'Mango'

// TODO =================
Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

    number - число, входження якого перевіряється
    start - початок числового проміжку
    end - кінець числового проміжку

Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль true або false.
// TODO =================
function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line
  return isInRange;
}

// ! ===== Exercise 22 ======
// ? ===== Theory =======
Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд, якщо його можна привести до true, і правий - в інших випадках.

вираз || вираз

У наступному прикладі умова зліва поверне true, тому результатом всього виразу буде true - повернеться значення першого операнда, яке було приведене до true.

const age = 5;
console.log(age < 10 || age > 30); // true || false -> true

Тут результатом теж буде true, оскільки хоча б один з операндів, у цьому випадку правий, був приведений до true.

const age = 40;
console.log(age < 10 || age > 30); // false || true -> true

А тут жодна з умов не виконується, тому отримуємо false - значення останнього операнда.

const age = 20;
console.log(age < 10 || age > 30); // false || false -> false

Тобто логічне «АБО» запинається на істині і повертає те, на чому запнулося або останній операнд.

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true

// TODO =================
Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Отримати доступ можуть тільки користувачі з передплатою pro або vip.
Присвой змінній canAccessContent вираз перевірки передплати. Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ. Результатом виразу перевірки буде буль true або false.
// TODO =================
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
  return canAccessContent;
}

// ! ===== Exercise 23 ======
// ? ===== Theory =======
Всі оператори, які ми розглядали до цього, були бінарними. Тобто вони містили два операнди: лівий і правий. Логічне «НЕ» - це унарний оператор, що виконує операцію над одним операндом справа.

!вираз

Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - замінює його на протилежний true -> false або false -> true.

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !'Mango' -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !'' -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false

// TODO =================
Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок. Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

    number - число, невходження якого перевіряється
    start - початок числового проміжку
    end - кінець числового проміжку

Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !.
// TODO =================
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange // Change this line
  return isNotInRange;
}

// ! ===== Exercise 24 ======
// ? ===== Theory =======
// TODO =================
Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час (партнерська програма). Знижка записується у змінну discount і повертається з функції як результат її роботи.
Використовуючи розгалуження і логічні оператори, доповни код функції.

    Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
    Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
    Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
    Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)

Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.
// TODO =================
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000) {
  discount = GOLD_DISCOUNT;
}
else if (totalSpent >= 20000) {
  discount = SILVER_DISCOUNT;
}  
else if (totalSpent >= 5000) {
  discount = BRONZE_DISCOUNT;
} 
else  {
  discount = BASE_DISCOUNT;
}   
  // Change code above this line
  return discount;
}

// ! ===== Exercise 25 ======
// ? ===== Theory =======
Тернарний оператор використовується як синтаксично коротша заміна інструкції if...else, коли одній і тій самій змінній необхідно присвоїти різні значення за умовою.

<умова> ? <вираз, якщо умова істинна> : <вираз, якщо умова хибна>

Працює за такою схемою:
    Обчислюється умова.
    Якщо умова істинна, тобто приводиться до true, обчислюється вираз після ?.
    Якщо умова хибна, тобто приводиться до false, обчислюється вираз після :.
    Значення обчисленого виразу повертається як результат роботи тернарного оператора.

let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}
console.log(type); // "adult"

Виконаємо рефакторинг, замінивши if...else тернарним оператором.

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"

Увага
Тернарний оператор повинен використовуватися у простих операціях присвоєння або повернення. Застосовувати його для заміни складних розгалужень - погана практика (антипатерн).

// TODO =================
Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.
// TODO =================
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  // Change code above this line
  return message;
}

// ! ===== Exercise 26 ======
// ? ===== Theory =======
// TODO =================
Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.
Використовуючи тернарний оператор, доповни функцію таким чином, що:
    Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
    В іншому випадку, присвой message рядок "Access denied, wrong password!".

// TODO =================
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
  // Change code above this line
  return message;
}

// ! ===== Exercise 27 ======
// ? ===== Theory =======
У деяких випадках незручність читання складних розгалужень if...else можна уникнути, використовуючи «плоскіший» синтаксис інструкції розгалуження switch.
Сфера застосування switch обмежена задачами з одним загальним питанням (що порівнювати) і безліччю варіантів відповідей (з чим порівнювати).

switch (значення) {
  case значення:
    інструкції;
    break;

  case значення:
    інструкції;
    break;
}

Його синтаксис складається з блоку switch(значення) - що потрібно порівняти та безлічі окремих випадків case значення: - з чим потрібно порівняти. Для порівняння використовується оператор строгої рівності ===. Тобто не можна порівняти на більше або менше, тільки на рівність.
Значення в блоці switch(значення) - рядок або число, яке порівнюється на строгу рівність з усіма значеннями в блоках case значення: по черзі, зверху вниз.
Оператор break в кінці кожного блоку case необхідний, щоб перервати подальші перевірки та одразу перейти до коду після switch у тому разі, коли перевірка на рівність повернула true.

// TODO =================
Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.
Якщо значення параметра type - це рядок:
    "starter" - ціна передплати 0 кредитів.
    "professional" - ціна передплати 20 кредитів.
    "organization" - ціна передплати 50 кредитів
Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
Після рефакторингу інструкція if..else була замінена на switch. Доповни код інструкції switch, щоб функція працювала правильно.
// TODO =================
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line
 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;
   case "professional": // Change this line
      price = 20; // Change this line
      break;
    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }
  // Change code above this line
  return price;
}

// ! ===== Exercise 28 ======
// ? ===== Theory =======
Якщо жодного збігу значень не відбулося, необхідно виконати код за замовчуванням, як у блоці else для інструкції if...else. Для цього, після всіх блоків case додається блок default.

switch (значення) {
  case значення:
    інструкції;
    break;

  case значення:
    інструкції;
    break;

  default:
    інструкції;
}
Оператор break після блоку default не потрібен, оскільки це і так останнє, що буде виконано в switch і управління буде передане коду після нього.

// TODO =================
Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.
Якщо значення параметра password:
    дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
    збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
    не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).
// TODO =================
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  switch (password) {
    case null :
      message = "Canceled by user!";
      break;
    case ADMIN_PASSWORD:  
      message = "Welcome!";
      break;
    default:
      message = "Access denied, wrong password!" 
  }
  // Change code above this line
  return message;
}

// ! ===== Exercise 29 ======
// ? ===== Theory =======
// TODO =================
Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат, що зберігається у змінній message. Обов'язково використовуй інструкцію switch.
Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.
Список країн і вартість доставки:

    China - 100 кредитів
    Chile - 250 кредитів
    Australia - 170 кредитів
    Jamaica - 120 кредитів

Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country"
// TODO =================
function getShippingCost(country) {
  let message;
  // Change code below this line
switch (country) {
 case "China":
    message = "Shipping to China will cost 100 credits";
    break;
 case "Chile":
    message = "Shipping to Chile will cost 250 credits";
    break;
  case "Australia":
    message = "Shipping to Australia will cost 170 credits";
    break;
  case "Jamaica":
    message = "Shipping to Jamaica will cost 120 credits";
    break;
  default:
    message = "Sorry, there is no delivery to your country"
}
  // Change code above this line
  return message;
}

// ! ===== Exercise 30 ======
// ? ===== Theory =======
Для того щоб дізнатися довжину рядка, тобто кількість її символів, у рядків є вбудована властивість length, значення якої можна отримати, звернувшись до неї через крапку після імені змінної або рядкового літерала.

const productName = "Repair droid";

// Якщо у змінній зберігається рядок
console.log(productName.length); // 12

// Якщо рядковий літерал
console.log("Repair droid".length); // 12

// TODO =================
Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.
// TODO =================
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line
  return message;
}

// ! ===== Exercise 31 ======
// ? ===== Theory =======
Рядок — це індексований набір з нуля або більше символів, взятих в одинарні, подвійні або скісні лапки.
Індексація елементів рядка починається з нуля. Наприклад, в рядку 'JavaScript' літера 'J' стоїть на позиції з індексом 0, а 't' - під індексом 9. При цьому довжина рядка 'JavaScript' дорівнює 10, тобто індекс останнього елемента завжди на одиницю менший його довжини.
Для доступу до значення елемента рядка використовується синтаксис квадратних дужок рядок[індекс].

const productName = "Repair droid";
console.log(productName[0]); // "R"
console.log(productName[5]); // "r"
console.log(productName[11]); // "d"
console.log(productName[productName.length - 1]); // "d"

Вміст рядка не можна змінити, лише прочитати. Тобто не можна взяти якийсь символ і замінити його, щойно рядок створений - він такий назавжди. Можна лише створити повністю новий рядок і присвоїти у змінну, замість старого.

// TODO =================
Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.
    courseTopicLength - довжина рядка.
    firstElement - перший символ рядка.
    lastElement - останній символ рядка.
// TODO =================
const courseTopic = "JavaScript essentials";
// Change code below this line
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];
// Change code above this line

// ! ===== Exercise 32 ======
// ? ===== Theory =======
Метод рядків slice(startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex, і повертає новий рядок.

const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"

// TODO =================
Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
    string - оригінальний рядок
    length - кількість символів з початку рядка для підрядка
Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.
// TODO =================
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line
  return substring;
}

// ! ===== Exercise 33 ======
// ? ===== Theory =======
// TODO =================
Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.
Доповни код функції таким чином, що якщо довжина рядка:
    не перевищує maxLength, функція повертає його в початковому вигляді.
    більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.
// TODO =================
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
if (message.length <= maxLength) {
  result = message;
}
  else {
    result = `${message.slice(0, maxLength)}...`
  }
  /// Change code above this line
  return result;
}

// ! ===== Exercise 34 ======
// ? ===== Theory =======
Бувають ситуації, коли всі символи в рядку необхідно перетворити в один регістр, верхній або нижній. Наприклад, під час пошуку за ключовим словом, коли користувач вводить рядок 'saMsUng', а порівняти її потрібно з рядком 'samsung' або 'SAMSUNG'.

console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false

Щоб не вимагати абсолютно точне введення, можна зробити «нормалізацію» введеного користувачем рядка, тобто перетворити всі його символи у верхній або нижній регістр. Методи рядка toLowerCase() і toUpperCase() повернуть новий рядок у відповідному регістрі, не змінюючи оригінальний.

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true
// TODO =================
Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.
// TODO =================
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line
  return normalizedInput;
}

// ! ===== Exercise 35 ======
// ? ===== Theory =======
Метод рядків includes(substring) перевіряє, чи входить підрядок substring у рядок, повертає буль - true, якщо входить, і false - в іншому випадку. Регістр символів в рядку і підрядку має значення, оскільки, наприклад літера "a" не дорівнює літері "А".

const productName = "Repair droid";

console.log(productName.includes("a")); // true
console.log(productName.includes("A")); // false
console.log(productName.includes("droid")); // true
console.log(productName.includes("Droid")); // false
console.log(productName.includes("Repair")); // true
console.log(productName.includes("repair")); // false

// TODO =================
Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.
    fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
    name - ім'я для перевірки входження в повне ім'я.
Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.
// TODO =================
function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}

// ! ===== Exercise 36 ======
// ? ===== Theory =======
// TODO =================
Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.
    Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
    Якщо в рядку відсутні заборонені слова, функція повертає буль false.
// TODO =================
function checkForSpam(message) {
  let result;
  // Change code below this line
  message = message.toLowerCase()
   result = message.includes("spam") || message.includes("sale")
  // Change code above this line
  return result;
}


