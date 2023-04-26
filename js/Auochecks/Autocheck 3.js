// ! ===== Exercise 1 ======
// ? ===== Theory =======
Об'єкти дозволяють описати і згрупувати характеристики об'єктів реального світу - користувача, книги, продукту магазину, чого завгодно. Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

Для оголошення використовуються фігурні дужки {} - літерал об'єкта. При створенні об'єкта можна додати властивості, кожна з яких описується парами ключ:значення. Ключ ще називають ім'ям властивості і це завжди рядок. Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо. Властивості розділяються комою.

// TODO =================
Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
    imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
    descr - опис, значення "Spacious apartment in the city center";
    rating - рейтинг, значення 4;
    price - ціна, значення 2153;
    tags - метаінформація, масив ["premium", "promoted", "top"].
// TODO =================
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};    

// ! ===== Exercise 2 ======
// ? ===== Theory =======
Значенням властивості може бути інший об'єкт. Це використовується для зберігання вкладених і згрупованих даних.

Наприклад, статистика користувача соціальної мережі складається з кількості послідовників, переглядів і лайків, і зберігати ці дані найзручніше у вигляді об'єкта. Те саме з місцем розташування, окремо країна і місто.

В майбутньому це можна буде використовувати для пошуку користувачів за країною, містом, мінімальною або максимальною кількістю послідовників тощо.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// TODO =================
Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

    name - ім'я власника, значення "Henry";
    phone - телефон, значення "982-126-1588";
    email - пошта, значення "henry.carter@aptmail.com".
// TODO =================
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  }
};

// ! ===== Exercise 3 ======
// ? ===== Theory =======
Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ключ_властивості. Здебільшого використовується синтаксис «через крапку» і підходить тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

    На місце звернення буде повернуте значення властивості з таким ім'ям.
    Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined

// TODO =================
Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

    aptRating - рейтинг;
    aptDescr - опис;
    aptPrice - ціна;
    aptTags - теги.
// TODO =================
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line

// ! ===== Exercise 4 ======
// ? ===== Theory =======


const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};

Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку». Наприклад, якщо необхідно отримати значення країни користувача, записуємо user.location.country, де user.location - це звернення (шлях) до об'єкта у властивості location, а user.locaton.country - звернення до властивості country в цьому об'єкті. Тобто, «крапка» вказує наступну вкладеність.

const location = user.location;
console.log(location); // Об'єкт location

const country = user.location.country;
console.log(country); // "Jamaica"

Якщо значення властивості - це масив, то у нашому прикладі user.hobbies - звернення до цього масиву. Далі можна отримати доступ до його елементів через квадратні дужки та індекс або використовувати властивості і методи.

const hobbies = user.hobbies;
console.log(hobbies); // ["swiming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swiming"

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

// TODO =================
Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

    ownerName - ім'я власника;
    ownerPhone - телефон власника;
    ownerEmail - пошта власника;
    numberOfTags - кількість елементів масиву у властивості tags;
    firstTag - перший елемент масиву у властивості tags;
    lastTag - останній елемент масиву у властивості tags.
// TODO =================
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line

// ! ===== Exercise 5 ======
// ? ===== Theory =======


Другий спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт["ключ_властивості"]. Схоже на звернення до елемента масиву з відмінністю в тому, що в дужках зазначається не індекс елемента, а ім'я властивості як рядок.

Синтаксис «квадратних дужок» використовується значно рідше. Як правило у випадках, коли ім'я властивості заздалегідь невідоме або воно зберігається у змінній (як значення параметра функції, наприклад).

    На місце звернення буде повернуто значення властивості з таким ім'ям.
    Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book["genres"];
console.log(bookGenres); // ["historical prose", "adventure"]

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // "Bernard Cornwell"

// TODO =================
Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

    aptRating - рейтинг;
    aptDescr - опис;
    aptPrice - ціна;
    aptTags - теги.
// TODO =================
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Change code above this line


// ! ===== Exercise 6 ======
// ? ===== Theory =======
Після того як об'єкт створений, значення його властивостей можна змінити. Для цього необхідно звернутися до них за ім'ям, наприклад, «через крапку», і присвоїти нове значення.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

book.rating = 9;
book.public = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.public); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]

// TODO =================
Доповни код, оновивши значення властивостей об'єкта apartment:

    ціну у властивості price на 5000;
    рейтинг квартири у властивості rating на 4.7;
    ім'я власника у вкладеній властивості name на "Henry Sibola";
    масив тегів у властивості tags, додавши в кінець рядок "trusted".
// TODO =================
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted")

// ! ===== Exercise 7 ======
// ? ===== Theory =======


Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості. Якщо під час запису значення за ім'ям, така властивість відсутня в об'єкті, вона буде створена.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]

// TODO =================
Додай об'єкту apartment кілька нових властивостей:

    area - площа в квадратних метрах, число 60;
    rooms - кількість кімнат, число 3;
    location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
        country - країна, рядок "Jamaica";
        city - місто, рядок "Kingston".
// TODO =================
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};

// ! ===== Exercise 8 ======
// ? ===== Theory =======


Іноді, під час створення об'єкта, значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.

Синтаксис у наступному прикладі занадто громіздкий, тому що доводиться дублювати ім'я властивості та ім'я змінної, в якій зберігається необхідне значення.

const name = "Генрі Сибола";
const age = 25;

const user = {
  name: name,
  age: age,
};

console.log(user.name); // "Генрі Сибола"
console.log(user.age); // 25

Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.

const name = "Генрі Сибола";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Генрі Сибола"
console.log(user.age); // 25

Тобто, під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.

// TODO =================
Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.
// TODO =================
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
 name,
  price,
  image,
  tags,
  
  // Change code above this line
};

// ! ===== Exercise 9 ======
// ? ===== Theory =======


Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.

Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.

const propName = "name";
const user = {
  age: 25,
};

user[propName] = "Генрі Сибола";
console.log(user.name); // "Генрі Сибола"

Синтаксис обчислюваних властивостей (computed properties) допомагає уникнути зайвого коду і, в деяких випадках, спростити його. Значенням обчислюваної властивості може бути будь-який валідний вираз.

const propName = "name";
const user = {
  age: 25,
  // Ім'я цієї властивості буде взято зі значення змінної propName
  [propName]: "Генрі Сибола",
};

console.log(user.name); // "Генрі Сибола"

// TODO =================
Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.
Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".
// TODO =================
const emailInputName = "email";
const passwordInputName = "password";
const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com", 
  [passwordInputName]: "jqueryismyjam",
  // Change code above this line
};

// ! ===== Exercise 10 ======
// ? ===== Theory =======
На відміну від масиву або рядка, об'єкт - це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of. Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

for (key in object) {
  // інструкції
}

Змінна key доступна тільки в тілі циклу. На кожній ітерації в неї буде записано значення ключа (ім'я) властивості. Для того щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}

// TODO =================
Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
// TODO =================
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key])
}

// ! ===== Exercise 11 ======
// ? ===== Theory =======
Розберемо концепцію власних і невласних властивостей об'єкта і навчимося правильно використовувати цикл for...in.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4

Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal. Тому можна отримати значення властивості legs, звернувшись до неї як dog.legs, хоча вона відсутня в об'єкті dog - це невласна властивість з об'єкта animal.
Оператор in, який використовується в циклі for...in, не розрізняє власні та невласні властивості об'єкта. Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості. Для того щоб дізнатися, чи є в об'єкті власна властивість, чи немає, використовується метод hasOwnProperty(key), який повертає true або false.

// ❌ Повертає true для всіх властивостей
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Повертає true тільки для власних властивостей
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false

Тому під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість. Навіть якщо зараз ми впевнені у тому, що об'єкт не містить невласні властивості, це захистить від можливих помилок в майбутньому.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Якщо це власна властивість - виконуємо тіло if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Якщо це невласна властивість - нічого не робимо
}

// TODO =================
Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.
// TODO =================
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}

// ! ===== Exercise 12 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.
// TODO =================
function countProps(object) {
  let propCount = 0;
  // Change code below this line
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    // const element = object[key];
  propCount += 1 
  }
}
  // Change code above this line
  return propCount;
}

// ! ===== Exercise 13 ======
// ? ===== Theory =======
Вбудований клас Object має кілька корисних методів для роботи з об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта, не вдаючись до використання архаїчного циклу for...in з перевірками приналежності властивостей.

const book = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(book[key]);
}
Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості з таким ключем.

// TODO =================
Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.
// TODO =================
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
}

// ! ===== Exercise 14 ======
// ? ===== Theory =======
// TODO =================
Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.
// TODO =================
function countProps(object) {
  // Change code below this line
 let propCount = Object.keys(object).length;
  return propCount;
  // Change code above this line
}

// ! ===== Exercise 15 ======
// ? ===== Theory =======
Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта, то метод Object.values(obj) повертає масив значень його власних властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "genres", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.

// TODO =================
Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().
// TODO =================
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

// ! ===== Exercise 16 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.
// TODO =================
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const values = Object.values(salaries);
  for (const value of values) {
    totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}

// ! ===== Exercise 17 ======
// ? ===== Theory =======
У стандартний набір повсякденних завдань розробника входить маніпуляція масивом однотипних об'єктів. Це означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];

Для перебирання такого масиву використовується стандартний цикл for...of. Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку», оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізняються тільки значення.

for (const book of books) {
  // Об'єкт книги
  console.log(book);
  // Назва
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}

// TODO =================
Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
// TODO =================
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
const hexColors = [];
const rgbColors = [];
// Change code below this line
for (let i of colors) {
  hexColors.push(i.hex);
  rgbColors.push(i.rgb);
}
console.log(hexColors, rgbColors)


// ! ===== Exercise 18 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
// TODO =================
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
for (const product of products) {
  if (product.name === productName) {
    return product.price;
  } 
}
return null;
  // Change code above this line
}
// ! ===== Exercise 19 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// TODO =================
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
  // Change code below this line
 let array = [];
  for (const product of products) {
    if (product[propName]) {
      array.push(product[propName])
    }
  }
  return array;
  // Change code above this line
}

// ! ===== Exercise 20 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// TODO =================
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
 let totalPrice = 0;

  for (element of products){
    if (element.name === productName) {
      totalPrice = (element.price * element.quantity);
    }
  }
  return totalPrice
  // Change code above this line
}

// ! ===== Exercise 21 ======
// ? ===== Theory =======
Складні дані завжди представлені об'єктом. Багаторазові звернення до властивостей об'єкта візуально забруднюють код.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const accessType = book.public ? "публічному" : "закритому";
const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;

Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні. Це робить код в місці їх використання менш «шумним».

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, author, public, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = public ? "публічному" : "закритому";
const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

Деструктуризація завжди знаходиться у лівій частині операції присвоєння. Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта. Якщо ім'я змінної та ім'я властивості збігаються, то відбувається присвоювання, в іншому випадку їй буде присвоєно undefined. Порядок оголошення змінних у фігурних дужках не важливий.

// TODO =================
Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature). Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.
// TODO =================
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow } = highTemperatures;
// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


// ! ===== Exercise 22 ======
// ? ===== Theory =======
З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати змінним значення за замовчуванням, які будуть присвоєні тільки у разі, коли в об'єкті відсутня властивість з таким ім'ям.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480"

// TODO =================
У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// TODO =================
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

// ! ===== Exercise 23 ======
// ? ===== Theory =======
Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується значення властивості. Спочатку пишемо ім'я властивості, з якої хочемо отримати значення, після чого ставимо двокрапку і пишемо ім'я змінної, в яку необхідно помістити значення цієї властивості.

const firstBook = {
  title: "Останнє королівство",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // Останнє королівство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смішної людини",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смішної людини
console.log(secondCoverImage); // https://via.placeholder.com/640/480

Такий запис читається як «Створити змінну firstTitle, в яку помістити значення властивості title з об'єкта firstBook» тощо.

// TODO =================
Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// TODO =================
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ! ===== Exercise 24 ======
// ? ===== Theory =======


Під час перебирання масиву об'єктів циклом for...of відбуваються багаторазові звернення до властивостей об'єкта.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

Якщо об'єкт містить небагато властивостей, деструктуризація можна виконати безпосередньо в місці оголошення змінної book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

// TODO =================
Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.
// TODO =================
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const  { hex, rgb } of colors) {

  
  hexColors.push(hex);
  rgbColors.push(rgb);
}

// ! ===== Exercise 25 ======
// ? ===== Theory =======


Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

// TODO =================
Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// TODO =================
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
    },
    tomorrow: {
      low: lowTomorrow,
      high: highTomorrow,
      icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
    },
  
} = forecast;

// ! ===== Exercise 26 ======
// ? ===== Theory =======
Якщо функція приймає більше двох-трьох аргументів, дуже просто заплутатися, в якій послідовності і що передавати. В результаті виходить дуже неочевидний код у місці її виклику.

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Робимо щось з параметрами
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// ❌ Що таке 736? Що таке 10283? Що таке true?
doStuffWithBook("Останнє королівство", 736, 10283, 8.38, true);

Патерн «Об'єкт налаштувань» допомагає вирішити цю проблему, замінюючи набір параметрів всього одним - об'єктом з іменованими властивостями.

function doStuffWithBook(book) {
  // Робимо щось з властивостями об'єкта
  console.log(book.title);
  console.log(book.numberOfPages);
  // І так далі
}

Тоді під час її виклику передаємо один об'єкт з необхідними властивостями.

// ✅ Все зрозуміло
doStuffWithBook({
  title: "Останнє королівство",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
});

Ще один плюс в тому, що можна деструктуризувати об'єкт в параметрі book.

// Це можна зробити в тілі функції.
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// Або в сигнатурі (підписі), різниці немає.
function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// TODO =================
Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}

Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// TODO =================
// Change code below this line
function calculateMeanTemperature(forecast) {
 const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// ! ===== Exercise 27 ======
// ? ===== Theory =======
Синтаксис ... (spread) дозволяє розподілити колекцію елементів (масив, рядок або об'єкт) в місце, в якому очікується набір окремих значень. Звичайно, існують деякі обмеження, наприклад, не можна розподілити масив в об'єкт і навпаки.

Можна навести аналогію з ящиком яблук. Поставивши ящик на підлогу, не виймаючи з нього яблука, отримаємо аналог масиву значень. Якщо висипати яблука з ящика на підлогу, відбудеться розподіл - набір окремих значень.

Відмінність лише одна - в JavaScript розподіл не змінює оригінальну колекцію, тобто створюється копія кожного елемента. Після розподілу залишиться і ящик повний яблук, і копія кожного яблука на підлозі.

Наприклад, метод Math.max (аргументи) шукає і повертає найбільший з аргументів (чисел), тобто очікує не масив значень, а довільну кількість аргументів.

const temps = [14, -4, 25, 8, 11];

// В консолі буде масив
console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25

Тобто запис Math.max (... [14, -4, 25, 8, 11]), після інтерпретації перетворюється у Math.max (14, -4, 25, 8, 11) - синтаксис ... повертає розпакований масив, тобто розподіляє його елементи у якості окремих аргументів.

// TODO =================
У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.
// TODO =================
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

// ! ===== Exercise 28 ======
// ? ===== Theory =======
Операція .spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий. Раніше для цього використовували методи slice() і concat(), але операція розподілу дозволяє зробити те саме у коротшій формі.

const temps = [14, -4, 25, 8, 11];

// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

В наведеному вище прикладі у нас є ящик яблук temps і ми хочемо створити його точну копію. Беремо порожній ящик і пересипаємо в нього яблука з вихідного ящика temps - розподіляємо його в іншу колекцію. За такої умови, ящик temps не зміниться, в ньому все ще будуть яблука, а в новому ящику - їх точні копії.

У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий. Оригінальні ящики (масиви) не зміняться, а в новому будуть копії усіх їх яблук (елементів). Порядок розподілу важливий - він впливає на порядок елементів у новій колекції.

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// TODO =================
У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:

    У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
    У змінній bestScore був найвищий загальний бал.
    У змінній worstScore був найнижчий загальний бал.
// TODO =================
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// ! ===== Exercise 29 ======
// ? ===== Theory =======
Операція spread дозволяє розподілити властивості довільної кількості об'єктів в один новий.

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

Порядок розподілу має значення. Імена властивостей об'єкта - унікальні, тому властивості об'єкта, що розподіляється, можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

Якби яблука в ящику мали наліпки з позначками, то в одному ящику не може бути двох яблук з однаковими позначками. Тому, пересипаючи другий ящик, усі яблука, позначки яких будуть збігатися з тими, що вже знаходяться у новому ящику, замінять існуючі.

Під час розподілу можна додавати властивості у довільне місце. Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// TODO =================
В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені налаштування. Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.
// TODO =================
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings };

// ! ===== Exercise 30 ======
// ? ===== Theory =======
// TODO =================
Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

    text - текст завдання.
    category - категорія завдання.
    priority - пріоритет завдання.

Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// TODO =================
function makeTask(data) {
  
  const category = "General";
  const priority = "Normal";
  const completed = false;
  // Change code below this line
const first = {category, priority, completed};

  const third = { ...first, ...data };
  return third;
  // Change code above this line
}

// ! ===== Exercise 31 ======
// ? ===== Theory =======
Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію. Синтаксично - це близнюк операції розподілу, але відрізнити їх просто - розподіл - коли ... знаходиться у правій частині операції присвоювання, а збирання - коли ... знаходиться в її лівій частині.

Повернемось до аналогії з яблуками. Якщо на підлозі лежать яблука і у нас є порожній ящик, то операція rest дозволить «зібрати» яблука в ящик. Водночас, оригінальні яблука залишаться на підлозі, а в ящику буде копія кожного яблука.

Одна зі сфер застосування операції rest - це створення функцій, які можуть приймати будь-яку кількість аргументів.

// Як оголосити параметри функції таким чином,
// щоб можна було передати будь-яку кількість аргументів?
function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

Якщо прибрати увесь «синтаксичний шум» і подивитися на аргументи і параметри функції, то аргументи знаходяться у правій частині операції присвоювання, а параметри - у лівій, тому що значення аргументів присвоюються оголошеним параметрам. Отже, можна «зібрати» всі аргументи функції в один параметр, використовуючи операцію rest.

function multiply(...args) {
  console.log(args); // масив усіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

Ім'я параметра може бути довільним. Найчастіше його називають args, restArgs або otherArgs - скорочено від arguments.

// TODO =================
Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

// TODO =================
// Change code below this line
function add(...args) {
  let sum = 0;
  for (const i of args) {
    sum += i;
  }
  return (sum);
  // Change code above this line
}

// ! ===== Exercise 32 ======
// ? ===== Theory =======
Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна, оголосивши параметри до «збирання».

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

Всі агументи, для яких будуть оголошені параметри, передадуть їм свої значення, інші аргументи будуть поміщені в масив. Операція rest збирає решту усіх аргументів, а тому повинна бути останньою у підписі функції, інакше виникне помилка.

// TODO =================
Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.
// TODO =================
// Change code below this line
function addOverNum(num, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > num) {
      total += arg;
    }
  }
  return total;
  // Change code above this line
}

// ! ===== Exercise 33 ======
// ? ===== Theory =======
// TODO =================
Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.
Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.
Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.
// TODO =================
// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line

for (const arg of args) {
  if (array.includes(arg)) {
    matches.push(arg);
  }
}
  // Change code above this line
  return matches;
}

// ! ===== Exercise 34 ======
// ? ===== Theory =======
Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних, наприклад, інформація про книгу тощо. Об'єкти-сховища, зазвичай, знаходяться в масиві таких самих об'єктів, який є колекцією однотипних елементів.

Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи. Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// ✅ Логічно і синтаксично згруповані сутності
const bookShelf = {
  books: ["Останнє королівство", "Страж снів"],
  // Це метод об'єкта
  getBooks() {
    console.log("Цей метод буде повертати всі книги - властивість books");
  },
  // Це метод об'єкта
  addBook(bookName) {
    console.log("Цей метод буде додавати нову книгу у властивість books");
  },
};

// Виклики методів
bookShelf.getBooks();
bookShelf.addBook("Нова книга");

Такі об'єкти можна назвати «моделями». Вони пов'язують дані і методи для роботи з цими даними. Наприклад, можна було оголосити змінну books і дві функції getBooks() і addBook(bookName), але тоді це були б три незалежні сутності без явного синтаксичного, і зі слабким логічним зв'язком.

// ❌ Слабкопозв'язані, незалежні сутності
const books = [];
function getBooks() {}
function addBook() {}

// TODO =================
Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.
// TODO =================
const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
  return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
  return `Updating book ${oldName} to ${newName}`;
  }
  // Change code above this line
};

// ! ===== Exercise 35 ======
// ? ===== Theory =======
Методи використовуються для роботи з властивостями об'єкта, їх зміни. Для доступу до об'єкта в методі використовується не ім'я змінної, наприклад bookShelf, а ключове слово this - контекст. Значенням this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку - це посилання на об'єкт bookShelf.

const bookShelf = {
  books: ["Останнє королівство"],
  getBooks() {
    console.log(this);
  },
};

// Перед крапкою знаходиться об'єкт bookShelf,
// тому, викликаючи метод, this буде зберігати посилання на нього.
bookShelf.getBooks(); // {books: ["Останнє королівство"], getBooks: f}

Для того щоб отримати доступ до властивостей об'єкта в методах, ми звертаємось до нього через this і далі, стандартно - «через крапку» до властивостей.

const bookShelf = {
  books: ["Останнє королівство"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["Останнє королівство"]
bookShelf.addBook("Імла");
bookShelf.addBook("Страж снів");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
bookShelf.removeBook("Імла");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]

Логічно замислитися - чому б не використовувати ім'я об'єкта у зверненні до властивостей, адже ми явно не збираємося його змінювати. Справа в тому, що ім'я об'єкта - річ ненадійна, методи одного об'єкта можна копіювати в інший (з іншим ім'ям), а в майбутньому дізнаємось, що часто під час створення об'єкта, ми наперед зовсім не знаємо імені. Використання this гарантує, що метод працює саме з тим об'єктом, який його викликав.

// TODO =================
Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.
// TODO =================
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
const bookIndex = this.books.indexOf(oldName)
 this.books.splice(bookIndex, 1, newName);
    // Change code above this line
  },
};

// ! ===== Exercise 36 ======
// ? ===== Theory =======
// TODO =================
До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля. Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.
// TODO =================
const atTheOldToad = {
  // Change code below this line
potions: [],
  // Change code above this line
};

// ! ===== Exercise 37 ======
// ? ===== Theory =======
// TODO =================
Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.
// TODO =================
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
getPotions() {
    return this.potions;
},
  // Change code above this line
};

// ! ===== Exercise 38 ======
// ? ===== Theory =======
// TODO =================
Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.
// TODO =================
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
 this.potions.push(potionName)
    // Change code above this line
  },
};

// ! ===== Exercise 39 ======
// ? ===== Theory =======
// TODO =================
Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.
// TODO =================
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
 for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i]) {
        console.log("Нашли такой продукт", potionName);
        console.log("индекс", i);
        this.potions.splice(i, 1);
      }
    }
    // Change code above this line
  },
};

// ! ===== Exercise 40 ======
// ? ===== Theory =======
// TODO =================
Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
// TODO =================
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
for (let i = 0; i < this.potions.length; i += 1) {
  if (oldName === this.potions[i]) {
    this.potions[i] = newName
  }
}
    // Change code above this line
  },
};

// ! ===== Exercise 41 ======
// ? ===== Theory =======
// TODO =================
Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

{
  name: "Dragon breath",
  price: 700
}

Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

    getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
    addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
    removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
    updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.
// TODO =================
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for(const potion of this.potions)
    if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1);
      }
      
    }
    return `Potion ${potionName} is already in your inventory!`;
  },
  updatePotionName(oldName, newName) {
  for (let i = 0; i < this.potions.length; i += 1) {
  if (oldName === this.potions[i].name) {
    this.potions[i].name = newName;
  }
}
  },
  // Change code above this line
};
