const promiseOne = new Promise((resolve, reject) => {
  //Do some async work
  //DB calls, cryptography, network

  setTimeout(() => {
    console.log("async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promise is consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("2 promise is consumed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "sarthak", email: "sarthak@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

console.log("===============================");

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "sarthak", password: "123" });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});

promiseFour.then((user)=> {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
}).finally(() => log("Promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "java", password: "123" });
        } else {
            reject("Error: java went wrong");
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();