const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    // console.table(this.items);
    for (const item of this.items) {
      if (item.name === product.name) {
        //  console.log("Такой продукт уже есть", product.name);
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (productName === name) {
        console.log("Нашли такой продукт", productName);
        console.log("индекс", i);
        items.splice(i, 1);
      }
    }
  },
  clear() {
    // this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;
    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: "apple", price: 50 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "banana", price: 60 });
cart.add({ name: "orange", price: 110 });
cart.add({ name: "orange", price: 110 });
cart.add({ name: "orange", price: 110 });

console.table(cart.getItems());

cart.remove("banana");
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());

console.log("Total:", cart.countTotalPrice());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
    for (const potion of this.potions)
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

const fnB = function (number) {
  console.log("Это лог при вызове функции fnB", number);
};

const fnA = function (message, callback) {
  console.log(message);
  console.log(callback);
  callback(100);
};

fnA("gfhdgh", fnB);

const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

const add = function (x, y) {
  return x + y;
};
const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, add);
doMath(30, 23, sub);


