// ! ===== Exercise 1 ======
// ? ===== Theory =======
У функції може бути більше одного оператора return. Головне пам'ятати, що виконання функції переривається, коли інтерпретатор зустрічає повернення, і весь код після нього буде проігнорований в поточному виклику функції.

Візьмемо вже знайому нам функцію перевірки повноліття. Вона працює, але тут є «зайвий» код, тобто тіло функції можна оптимізувати. В цьому випадку підійде спосіб (патерн) «раннє повернення».

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = "Ви повнолітня людина";
  } else {
    message = "Ви неповнолітня людина";
  }

  return message;
}

    Якщо умова в if виконується, тобто приводиться до true, повертаємо рядок "You are an adult", і код нижче вже не виконається.
    Якщо умова в if не виконується, тобто приводиться до false, повертаємо рядок "You are a minor".

Використовуючи патерн «раннє повернення» і те, що виконання функції переривається на операторі return, ми позбавляємося зайвої змінної і блоку else. Тобто цей спосіб допомагає «розгладити» розгалуження.

// TODO =================
Запиши умову в інструкції if таким чином, щоб функція працювала правильно.
// TODO =================
function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }
  return "You are a minor";
}

// ! ===== Exercise 2 ======
// ? ===== Theory =======
// TODO =================
Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

    видали змінну message
    видали else
    код повинен працювати так само, як і до оптимізації
// TODO =================
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  } 
    return "Access denied, wrong password!";
  // Change code above this line
}

// ! ===== Exercise 3 ======
// ? ===== Theory =======
// TODO =================
Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

    available - доступна кількість товарів на складі
    ordered - кількість одиниць товару в замовленні

Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».
// TODO =================
function checkStorage(available, ordered) {
  // Change code below this line
  if (ordered === 0) {
   return "Your order is empty!";
    ;
  } if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
    return "The order is accepted, our manager will contact you";
  // Change code above this line
}

// ! ===== Exercise 4 ======
// ? ===== Theory =======
Масив використовується для зберігання впорядкованої колекції елементів. Він оголошується відкритою і закритою квадратною дужкою [] - літералом масиву. Всередині дужок кожен елемент масиву розділяється комою.

const planets = ["Earth", "Mars", "Venus"];

Корисно
Оголошуючи змінну для об'єкта або масиву, програмісти, як правило, використовують const. Вони роблять це для того, щоб випадково не перезаписати значення, оскільки спроба перезапису викличе помилку до того, як код потрапить до користувача.

// TODO =================
Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".
// TODO =================
// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"]

// ! ===== Exercise 5 ======
// ? ===== Theory =======
Для доступу до значення елемента масиву застосовують синтаксис квадратних дужок масив[індекс]. Між ім'ям змінної масиву і квадратними дужками не повинно бути пробілу.
Увага
Індексація елементів масиву починається з нуля.

const planets = ["Earth", "Mars", "Venus"];
planets[0]; // "Earth"
planets[2]; // "Venus"

// TODO =================
Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.
Ім'я змінної 	Значення змінної
firstElement 	перший елемент масиву
secondElement 	другий елемент масиву
lastElement 	останній елемент масиву
// TODO =================
const fruits = ["apple", "plum", "pear", "orange"];
// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// ! ===== Exercise 6 ======
// ? ===== Theory =======
На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення.

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers[2] = 14;
console.log(numbers); // [7, 2, 14, 4, 5];

// TODO =================
Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".
// TODO =================
const fruits = ["apple", "plum", "pear", "orange"];
// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";

// ! ===== Exercise 7 ======
// ? ===== Theory =======
Довжина масиву, тобто кількість його елементів, зберігається у властивості length. Це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.

const planets = ["Earth", "Mars", "Venus"];
console.log(planets.length); // 3

// TODO =================
Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.
// TODO =================
const fruits = ["apple", "peach", "pear", "banana"];
// Change code below this line
const fruitsArrayLength = fruits.length

// ! ===== Exercise 8 ======
// ? ===== Theory =======
Найчастіше ми заздалегідь у коді не знаємо, яка буде довжина масиву. Для того щоб отримати значення останнього елемента, застосовується наступний підхід - довжина масиву завжди на одиницю більша за індекс останнього елемента. Використовуючи формулу довжина_масиву - 1, можна отримати значення останнього елемента масиву довільної довжини.

const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // "Venus"

// TODO =================
Оголоси дві зміні:
Ім'я змінної 	Очікуване значення
lastElementIndex 	Індекс останнього елемента масиву fruits через довжина_масиву - 1
lastElement 	Значення останнього елемента масиву
// TODO =================
const fruits = ["apple", "peach", "pear", "banana"];
// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// ! ===== Exercise 9 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.
// TODO =================
function getExtremeElements(array) {
  // Change code below this line
const newArray = [array[0], array[array.length - 1]];
  return newArray
  // Change code above this line
}

// ! ===== Exercise 10 ======
// ? ===== Theory =======
Метод split(delimiter) дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter. Якщо роздільник - це порожній рядок, отримаємо масив окремих символів. Роздільником може бути один або кілька символів.

const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]

// TODO =================
Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.
// TODO =================
function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
words = message.split(delimiter)
  // Change code above this line
  return words;
}

// ! ===== Exercise 11 ======
// ? ===== Theory =======
// TODO =================
Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
// TODO =================
function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
 return message.split(" ").length * pricePerWord;
   // Change code above this line
}

// ! ===== Exercise 12 ======
// ? ===== Theory =======
Метод масивів join(delimiter) дозволяє з'єднати елементи масиву в рядок. У рядку елементи будуть розділені символом або групою символів, зазначених у delimiter. Тобто це зворотна операція методу рядків split(delimiter).

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'

// TODO =================
Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.
// TODO =================
function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
string = array.join(delimiter)
  // Change code above this line
  return string;
}

// ! ===== Exercise 13 ======
// ? ===== Theory =======
// TODO =================
Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.
Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.
Увага
Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

    Значенням параметра title будуть рядки, слова яких розділені лише пробілами
    Усі символи slug повинні бути у нижньому регістрі
    Всі слова slug повинні бути розділені тире
// TODO =================
function slugify(title) {
  // Change code below this line
  return title.split(' ').join('-').toLowerCase();
  // Change code above this line
}

// ! ===== Exercise 14 ======
// ? ===== Theory =======
Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія робиться від begin і до, але не включно, end - індекси елементів вихідного масиву.

    Якщо begin та end не вказані, буде створена повна копія вихідного масиву.
    Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.
    Якщо значення start від'ємне, а end не вказане, то будуть скопійовані останні N елементів.

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

// TODO =================
Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

    firstTwoEls - масив із перших двох елементів
    nonExtremeEls - масив з усіх елементів, крім першого та останнього
    lastThreeEls - масив із трьох останніх елементів
// TODO =================
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

// ! ===== Exercise 15 ======
// ? ===== Theory =======
Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

const firstArray = ["Mercury", "Venus", "Earth"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Uranus", "Neptune"];
const allPlanets = firstArray.concat(secondArray, thirdArray);

console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// TODO =================
Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.
// TODO =================
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

// ! ===== Exercise 16 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.
// TODO =================
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
 const totalArray  = firstArray.concat(secondArray);
  if (totalArray.length > maxLength) {
    return totalArray.slice(0, maxLength);
  }
  else {
    return totalArray;
  }
    // Change code above this line
  }

// ! ===== Exercise 17 ======
// ? ===== Theory =======
Цикли використовуються для багаторазового повторення коду. Оголошення циклу for складається з трьох виразів.

for (Ініціалізація; Умова; Пост - вираз) {
  // Тіло циклу
}
    Ініціалізація - виконується один раз перед початком циклу. Використовується для створення змінної-лічильника і встановлення її початкового значення.
    Умова - вираз, що оцінюється перед кожною ітерацією (повторенням) циклу. Тіло циклу виконується тільки тоді, коли вираз приводиться до true. Цикл завершується, якщо значення буде false.
    Пост-вираз - виконується в кінці кожного повторення циклу, перед перевіркою умови. Використовується для оновлення змінної-лічильника.
    Тіло - набір інструкцій для виконання на кожному повторенні. Виконується, якщо вираз умови приводиться до true.

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

В прикладі оголошується змінна i, ініціалізується значенням 0, і цикл виконується (його тіло) доти, доки i <= 20, тобто умова приводиться до true. Після кожної ітерації лічильник збільшується на 5.

// TODO =================
Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.
// TODO =================
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}

// ! ===== Exercise 18 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// TODO =================
function calculateTotal(number) {
 // Change code below this line
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }
  return sum;
  // Change code above this line
}

// ! ===== Exercise 19 ======
// ? ===== Theory =======
Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}

Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс], де індекс - це значення лічильника циклу від 0 і до останнього індексу масиву, який на одиницю менший за довжину масиву.

// TODO =================
Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.
// TODO =================
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// ! ===== Exercise 20 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.
// TODO =================
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i < order.length; i += 1) {
  total += order[i];
  }
  // Change code above this line
  return total;
}

// ! ===== Exercise 21 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.
// TODO =================
function findLongestWord(string) {
  // Change code below this line
  string = string.split(" ");  
     
   let word = "a";
   for (let i = 0; i < string.length; i += 1) {
     if (string[i].length > word.length) {
       word = string[i];
     }
   }
  return word
  // Change code above this line
}

// ! ===== Exercise 22 ======
// ? ===== Theory =======
Метод push() дозволяє додати один або кілька елементів в кінець масиву, без необхідності вказувати індекси елементів, що додаються.

const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
planets.push("Saturn", "Uranus", "Neptune");

console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

// TODO =================
Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.
// TODO =================
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i = min; i <= max; i +=1) {
  numbers.push(i);
}
  // Change code above this line
  return numbers;
}

// ! ===== Exercise 23 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).
// TODO =================
function filterArray(numbers, value) {
   // Change code below this line
  const newArrey = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArrey.push(numbers[i]);
    } else {
      continue;
    }
  }
return newArrey
  // Change code above this line
}

// ! ===== Exercise 24 ======
// ? ===== Theory =======
Метод includes(value) перевіряє, чи присутній в масиві елемент зі значенням value, і повертає true або false відповідно. Сфера застосування цього методу зводиться до ситуацій, коли необхідно перевірити, чи присутній елемент в масиві, і не важлива його позиція (індекс).

const planets = ["Earth", "Mars", "Venus"];

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false

// TODO =================
Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

Доповни код функції таким чином, що якщо:

    фрукт присутній в масиві, то функція повертає true;
    фрукт відсутній в масиві, то функція повертає false.

// TODO =================
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

// ! ===== Exercise 25 ======
// ? ===== Theory =======
// TODO =================
Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
// TODO =================
function getCommonElements(array1, array2) {
  // Change code below this line
 const newArrey = [];
 for (let i = 0; i < array1.length; i += 1) {
   if (array2.includes(array1[i])) {
     newArrey.push(array1[i]);
   } else {
     continue;
    }
 }
   return newArrey;
 // Change code above this line
}

// ! ===== Exercise 26 ======
// ? ===== Theory =======
Інструкція for...of оголошує цикл, який перебирає ітерабельні об'єкти, такі як масиви та рядки. Тіло циклу буде виконуватися для значення кожного елемента. Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

for (const variable of iterable) {
  // тіло цикла
}

    variable - змінна, яка буде зберігати значення елемента на кожній ітерації
    iterable - колекція, яка містить ітерабельні елементи, наприклад масив

const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}

// TODO =================
Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.
// TODO =================
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (order of order) {
    total += order;
  }
  // Change code above this line
  return total;
}

// ! ===== Exercise 27 ======
// ? ===== Theory =======
// TODO =================
Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.
// TODO =================
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
    for (const number of numbers) {      
    if (number > value) {
      filteredNumbers.push(number);   
    }  
  }
  return filteredNumbers;
  // Change code above this line
}

// ! ===== Exercise 28 ======
// ? ===== Theory =======
Замість того, щоб повертати результат ділення, операція за модулем (%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника.

5 % 1 = 0;
// 5, поділене на 1, дорівнює 5, а остача - 0

5 % 2 = 1;
//  5, поділене на 2, дорівнює 2, а остача - 1

5 % 3 = 2;
//  5, поділене на 3, дорівнює 1, а остача - 2

5 % 4 = 1;
//  5, поділене на 4, дорівнює 1, а остача - 1

5 % 5 = 0;
//  5, поділене на 5, дорівнює 1, а остача - 0

// TODO =================
Доповни вираз остачі від ділення таким чином, щоб код проходив тести.
// TODO =================
// Change code below this line
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 3;

// ! ===== Exercise 29 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
// TODO =================
function getEvenNumbers(start, end) {
   // Change code below this line
  const result = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 !== 0) {
      continue 
    }
    result.push(i)
  }
  return result;
    // Change code above this line
  }

// ! ===== Exercise 30 ======
// ? ===== Theory =======
Перервати виконання циклу можна в будь-який момент. Для цього існує оператор break, який повністю припиняє виконання циклу і передає управління на рядок за його тілом.

У прикладі шукаємо число 3. Щойно виконається умова if, цикл припинить своє виконання (буде перерваний).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Знайшли число 3, перериваємо виконання циклу");
    break;
  }
}
console.log("Лог після циклу");

// TODO =================
Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.
// TODO =================
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break
  }
}

// ! ===== Exercise 31 ======
// ? ===== Theory =======
Якщо цикл знаходиться в тілі функції, то оператор break не припиняє виконання функції, а тільки перерве цикл. Для того щоб переривати виконання відразу циклу і функції, є оператор return.

У прикладі шукаємо число 3. Щойно виконається умова if, робимо повернення, яке перерве виконання циклу і функції.

function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log("Знайшли число 3, робимо повернення, перериваючи цикл і функцію");
      return i;
    }
  }
  // Цей console.log не виконається
  console.log("Лог після циклу в тілі функції");
}

const result = fn();
console.log("Лог після виходу з функції");
console.log(`Результат виконання функції ${result}`);

// TODO =================
Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
    повертала перше число від start до end, яке ділиться на divisor без остачі
    не використала оператор break
    не використала змінну number
// TODO =================
function findNumber(start, end, divisor) {
  // Change code below this line
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return  i; 
    }
  }
  // Change code above this line
}

// ! ===== Exercise 32 ======
// ? ===== Theory =======
// TODO ================
Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).
// TODO =================
function includes(array, value) {
  // Change code below this line
for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}


