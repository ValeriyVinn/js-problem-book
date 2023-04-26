// ! ==================== Проміси ====================================

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve("Промис выполнился успешно, с результатом (исполнен, fulfilled)");
//     }
//     reject("Промис выполнился с ошибкой (отклонен, rejected)");
//   }, 1000);
// });

// console.log(promise)

//?   або
// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

//?   або
// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log("onFulfilled -> onFulfilled");
//   console.log("result");
// }

// function onRejected(error) {
//   console.log("onRejected -> onRejected");
//   console.log("error");
// }

//? ====== Цепочки промисов (chaining) ==========

// promise
//   .then(onFulfilled, onRejected)
//   .then(
//     (x) => {
//       console.log(x);
//       return 10;
//     },
//     (error) => console.log(error)
//   )
//   .then(
//     (y) => console.log(y),
//     (error) => console.log(error)
//   );

//? ====== В then выносим только успешное выполнение промисов (используем .catch)  ==========
// promise
//   .then(onFulfilled)
//   .then((x) => {
//     console.log(x);
//     throw new Error("ошибка во втором then");
//     return 10;
//   })
//   .then((y) => console.log(y)).catch(error=> console.log(error))
//  .finally(() => console.log('Я буду выполнен в любом случае'))

  
// console.log(promise)


