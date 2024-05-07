// npm - global coomand, come with node

// npm  --version

// local dependency - use it only in this particular project

// npm i <packageName>

// global dependency - use it in any project

// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (steps by steps, press enter to skip)
// npm init -y (everything default)

// const _ = require("lodash");
// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);

///const EventEmitter = require("events");

// console.log("start");

// setTimeout(function cb() {
//   console.log("callback function");
// }, 5000);

// console.log("end");
// let startDate = new Date().getTime();
// let endDate = startDate;

// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("while expires");

// const users = [
//   { firstName: "Ashish", lastName: "Raj", age: 23 },
//   { firstName: "Manish", lastName: "Kumar", age: 29 },
//   { firstName: "ujjwal", lastName: "Roy", age: 29 },
//   { firstName: "chutiya", lastName: "Mukherjee", age: 50 },
// ];

// const output = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);

// console.log(output);

const cart = ["shoes", "pant", "kurta"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return paymentInfo;
  })
  .then(function (paymentInfo) {
    return shpwOrderSummary(paymentInfo);
  })
  .then(function (summaryInfo) {
    return summaryInfo;
  })
  .then(function (summaryInfo) {
    return updateWallet(summaryInfo);
  })
  .then(function (summaryInfo) {
    console.log(summaryInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    //validateCart
    //orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "123456";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successfull");
  });
}

function shpwOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    resolve("order is successfull");
  });
}

function updateWallet(summaryInfo) {
  return new Promise(function (resolve, reject) {
    resolve("wallet is updated");
  });
}

function validateCart(cart) {
  return true;
}
