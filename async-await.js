//const { reject } = require("lodash");

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Reso;ved Value!!");
  }, 40000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Reso;ved Value!!");
  }, 20000);
});

// async function getData() {
//   return p;
// }

// const dataPromise = getData();
// dataPromise.then((res) => console.log(res));

// Async and await are used to handle promise
// Await is the keyboard that only we used inside the async file
const API_URL = "https://api.github.com/users/users";
async function handlePromise() {
  // console.log("hello");
  // //Js Engine will wait for promise to be resolved
  // const val = await p;
  // console.log("by");
  // console.log(val);
  // //return await p;
  // const val2 = await p2;
  // console.log("by");
  // console.log(val2);
  try {
    const data = await fetch(API_URL);

    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }

  //console.log(jsonValue);

  // fetch() => Response.json()=>results
}

// function getData() {
//   console.log("Hello World");
// js engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));
//   console.log("Hello By");
// }
// getData();
handlePromise();
//console.log(val);
