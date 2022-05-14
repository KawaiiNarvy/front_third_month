// LESSON 2
// ASYNK
// SET TIMEOUT

// console.log("ok");

// const hi = () => {
//   console.log("hi");
// };
// setTimeout(hi, 2000);

// () => {} анонимная функция

// setTimeout(() => {
//   console.log("he-he");
// }, 3000);

// 1000 = 1 секунда

// // SET INTERVAL

// setInterval(() => {
//   console.log("interval");
// }, 2000);

// const sayHi = () => {
//   console.log("hi, dude");
// };

// const interval = setInterval(sayHi, 1000);
// // clearInterval(interval);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

// ========

// const init = () => {
//   let name = "OK";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// };
// init();

// const func = (num) => {
//   const culk = () => {
//     console.log(1000 * num);
//   };
//   culk();
// };

// func(24);

// const funk = (n) => {
//   return function (num) {
//     return n + num;
//   };
// };

// const addOne = funk(1);
// const addTen = funk(10);

// console.log(addOne(10));
// console.log(addTen(3));