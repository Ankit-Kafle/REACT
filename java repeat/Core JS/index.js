// const items = document.querySelectorAll(".list-item");

// items.forEach((item) => {
//     item.addEventListener("click", () => {
//         alert(item.textContent);
//     });
// });

// const view= document.querySelector("#view");
// const h1= view.querySelector("h1");
// h1.addEventListener("click",()=>{
//     alert("doing something hehe..")
// });


// const get= document.querySelector("ul");
// get.addEventListener("click",()=>{
//   console.log("good")
// });

// document.addEventListener("readystatechange", () => {
//     console.log("Current State:", document.readyState);
// });


// document.addEventListener("readystatechange", () => {
//     if (document.readyState === "complete") {
//         const heading = document.querySelector("h1");
//         heading.style.color = "red";
//         console.log("DOM is ready!");
//     }
// });

//Asynchronous code executon allows to execute the next instructions to execute immediately and doesnot block the flow

// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("Hehehe")
// },2000)
// console.log("three");

//CALLBACKS IS A FUNCTION PASSED AS A ARGUEMNET TO ANOTHER FUNCTION.

//eg 1
// function sum(a,b) {
//     console.log(a+b);
// }

//  function calculator(a,b,sumCallback){
//     sumCallback(a,b);
//  }

//  calculator(1,2,sum);


 //eg 2
//  const hello=()=>{
//     console.log("HEllo");
//  }
//  setTimeout(hello,3500);


 
//  function getData(dataId){
//      //2s
//     setTimeout(() =>{
//     console.log("Data",dataId);
//  },2000);
// }

// getData(1);
// getData(2);
// getData(3);
//if we do this than all data 1,2 and 3 comes together simultaneously

//But if we want first data1 and after that data 2 and after that data 3

// function getDaku(dakuId, callback) {

//     setTimeout(() => {
//         console.log("Daku", dakuId);

//         if (callback) {
//             callback();
//         }
//     },4500);
// }

// }

// getDaku(1, () => {
//     getDaku(2);
// });



//CallBAck Hell
 
 //Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)
 //This style of programming becomes difficult to understand and manage.

// getDaku(1, () => {
//     getDaku(2, () => {
//         getDaku(3, () => {
//             console.log("All dakus fetched!");
//         });
//     });
// });









// PROMISES
// Promise is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell.
// let promise = new Promise((resolve,reject)=>{....})   //Function with two handlers given by js
// *resolve and reject are callbacks provided by JS



// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("sucess");
// });




//let console of js write let prom = getDapu(123); and immediately after this write prom => which will show pending and after 5 sec send data and again write prom
// function getDapu(dakuId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   console.log("Daku", dakuId);
//     //   resolve("success");

//     reject("ERROR");
//     }, 5000);
//   });
// }

//.then() & .catch()
//promise.then((res)=>{...})
//promise.catch((err)=>{...})

// const getPromise =()=>{
//     return new Promise((resolve,reject)=>{

//         console.log("i am a Promise");
//         // resolve("success");
//         reject("error")
//     });
// };

// let Supa = getPromise();


// Supa.then((res)=>{
// console.log("promise fullfilled");
// });

// Supa.catch((err)=>{
//     console.log("Rejected the",err);
// })

function asyncFunc1(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data1")
            resolve("We are Success");
        },3000);
    })
}

// console.log("fetching data1...")
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// });


function asyncFunc2(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data2")
            resolve("We are Success");
        },3000);
    })
}

// console.log("fetching data2...")
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });



//promise chain: auta then sanga arko then lai chain garnu lai nai chaining vhanenxa
// console.log("fetching data1...")
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log("fetching data2...")
//     let p2= asyncFunc2();
//     p2.then((res)=>{});

// })


 function getDapu(dakuId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Daku", dakuId);
      resolve("success");

    
    }, 5000);
  });
}


//Promise chain

//Level 1 chain

//console.log("Getting data1...")
// getDapu(1)
// .then((res)=>{
//     console.log(res);
//  console.log("Getting Data2..")
//     getDapu(2)
// .then(()=>{
//         console.log(res);
//     })
// })


//Level 2 chain
// getDapu(1)
// .then((res)=>{
//     return getDapu(2);
// })
// .then((res)=>{
//     return getDapu(3);
// })
// .then((res)=>{
//    console.log(res);
// });



//ASYNC-AWAIT ARE THE KEYWORD IN THE JS
// async function always returns a promise.
// async function myFunc() {...}

// await pauses the execution of its surrounding async function until the promise is settled.

//if we use async in this function then, now its work is to give promise compulsary when it is called. Test can be done in console 
async function hello(){
    console.log("Hello");
}

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api(); //1st
    await api(); //2nd
}

// getWeatherData(); call this in console




 function getDapu(dakuId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Daku", dakuId);
      resolve("success");

    
    }, 5000);
  });
}
//Async-Await
// async function getAllData(){
//     console.log("getting data1......");
//     await getDapu(1);
//       console.log("getting data2......");
//     await getDapu(2);
//       console.log("getting data3......");
//     await getDapu(3);
//       console.log("getting data4......");
//     await getDapu(4);
//       console.log("getting data5......");
//     await getDapu(5);
// }

// getAllData();


//IIFE : Immediately invoked Function Expression 
// IIFE is a fumction that is called immediately as soon as it is defined .

// (async ()=>{
//     console.log("getting data1......");
//     await getDapu(1);
//       console.log("getting data2......");
//     await getDapu(2);
//       console.log("getting data3......");
//     await getDapu(3);
//       console.log("getting data4......");
//     await getDapu(4);
//       console.log("getting data5......");
//     await getDapu(5);
// })();




// FETCH API IS Started from here
// for doing API(Application programming interface) fetch we are using Fetch API
//The Fetch API provides an interface for fetching (sending/receiving) resources.
//It uses Request and Response objects.
// The fetch() method is used to fetch a resource (data).

// let promise= fetch(URL,[options])  this fetch return the promise




// const URL = "https://catfact.ninja/fact";
// // let prom = fetch(URL);
// // console.log(prom);
// let goodies = document.querySelector("#APItest");

// const getFacts = async () => {
//   try {
//     console.log("getting data...");

//     let response = await fetch(URL);
//     let data = await response.json();

//     console.log(data);

//     goodies.innerText = data.fact; // IMPORTANT CHANGE
//   } catch (error) {
//     console.log("Error:", error);
//     goodies.innerText = "Failed to load fact.";
//   }
// };

// getFacts();

// UNDERSTANDING TERMS
// AJAX is Asynchromous JS and XML
// JSON is JavaScript Object Notation
//json() method : returns a second promise that resolves with the result of parsing the respone body text as JSON.(input is JSON,output is JS object). It is a Asynchronous function so we have to use await in it
// nowdays AJAJ is used in fetch API

//by using promise
function getFacts() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      goodies.innerText = data.fact;
    })
    .catch((error) => {
      console.log("Error:", error);
      goodies.innerText = "Failed to load fact";
    });
}


//HTTPS verbs and response status code look in MDN 
//*HTTP response headers also contain details about the responses,such as content type.HTTP status code etc.
