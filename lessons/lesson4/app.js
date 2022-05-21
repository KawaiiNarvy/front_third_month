// const obj = {
//     name: "John",
//     age: "20"
// }

// console.log(obg);

// const data = JSON.stringify(obj)
// console.log(data);

// console.log(JSON.parse(data));

// const btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "data.json");
//     request.setRequestHeader("Content-type", "application/json");
//     request.send();
//     request.addEventListener("load", () => {
//         const data = JSON.parse(request.response)
//         console.log(request.response);
//         document.querySelector(".name").innerHTML = data.name;
//         document.querySelector(".age").innerHTML = data.age;
//     });
// });

// num str null undef boolean nan - primitive
// arr obj fun - obj

// const num = 5;
// let num2 = num + 20;

// console.log(num);
// console.log(num2);

// const obj = {
//     name: "Alex",
//     num: "+996555332211"
// }

// const obj2 = obj

// obj2.name = "John"

// const obj3 = {...obj }



// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// let http = require("http");

// http
//     .createServer((request, response) => {
//         response.writeHead(200, { "content-type": "text/plain" })
//         response.end("Hello world")
//     })
//     .listen(8081);

// console.log("server running at http://127.0.0.1:8081");