// includes (string & array)

// FOR STRING
const product1 = "water - aquafina";

// console.log(product1.includes('water'));

const products = ["water", "rice"];

// console.log(products.includes('water'))

// *********** EXAMPLE
// get element from dom (Document Object Model || document.*)
// get element Classes
// check if that element have a spec class
// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// trim

// *********** EXAMPLE
// const email = ' ahmed@gmail.com '

// console.log(email)

// console.log(email.trim())

// if (email.trim()) {
//     console.log('Email Is Found')
// } else {
//     console.log('Email Not Found')
// }
// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// substr

// *********** EXAMPLE
// const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

// const p = document.querySelector("#main");
// p.textContent = paragraph.substr(0, 60) + '...';

// const button = document.getElementById('seeMore')
// button.addEventListener('click', () => {
//   p.textContent = paragraph;
// })

// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// repeat
// username: ahmed ali
// password: *********** (show)

// const username = 'ahmed ali'
// const char = '*'
// console.log(char.repeat(username.length))

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// replace
let msg = "Hello Orange";

msg = msg.replace("Orange", "[Not Allowed Word]");

console.log(msg);

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// every

// *********** EXAMPLE
const usersAges = [21, 20, 30, 29, 19];

const allAbove18 = usersAges.every((age) => age > 18);

// console.log(allAbove18)

// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// some

// const usersNames = ["ahmed", "ali", "mario"];
// const atLeastOne = usersNames.some( name => name == 'ali' );

// console.log(atLeastOne)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// reduce

// const fees = [100, 200, 400, 500, 1000, 300];

// let total = 0;

// for (let i=0; i < fees.length; i++) {
//     total += fees[i]
// }

// acc      current     total
// 100      200         300
// 300      400         700
// 700      500         1200
// 1200     1000        2200
// 2200     300         2500

// const total = fees.reduce((acc, current) => acc + current)

// console.log(total)

const fees = [100, 200, 400, 500, 1000, 300];

// acc      current     total
// 1000     100         1100
// 1100     200         1300
// 1300     400         1700
// 1700     500         2200
// 2200     1000        3200
// 3200     300         3500

// const total = fees.reduce(
//   (acc, current) => acc + current,
//   1000
// );

// console.log(total)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// map

// let salaries = [1000, 2000, 3000, 4000];

// salaries = salaries.map(item => item + 1000)

// console.log(salaries)

// const users = [
//   {
//     name: 'ahmed',
//     salary: 3000
//   },
//   {
//     name: 'mohammed',
//     salary: 6000
//   },
//   {
//     name: 'gamal',
//     salary: 4000
//   },
// ]

// const usersSalaries = users.map(user => user.salary)
// const usersNames = users.map(user => user.name)

// console.log(usersSalaries)
// console.log(usersNames)

// console.log(users)

// |-----|
// |     | =>  ()
// |-----|

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// concat

const arr1 = [10, 20, 30, 40];
const arr2 = [50, 60, 70, 80];
const arr3 = [90, 100, 110, 120];

const fullArray = arr1.concat(arr2, arr3);

// console.log(fullArray)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// splice vs slice

// const tags = ["article", "sport", "medical", "applications", "programming"];

// const slice = tags.slice(0, 2)

// console.log(slice)
// console.log(tags)

// const splice = tags.splice(0, 2, "test", "test2", "test 3")

// console.log(splice)
// console.log(tags)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

const user = {
  name: "ahmed",
  email: "ahmed@gmail.com",
  age: 30,
  salary: 4000,
};

// Object.keys

// const keys = Object.keys(user)
// console.log(keys)

// Object.values

// const values = Object.values(user)
// console.log(values)

// Object.entries

// const transformObjectToArray = Object.entries(user)
// console.log(transformObjectToArray)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// async function and await

// const p1 = new Promise((resolve, reject) => {
//   const connectionSuccess = true;

//   setTimeout(() => {
//     if (connectionSuccess) {
//       resolve("Promise 1 Connection Success");
//     } else {
//       reject("Promise 1 Connection Failed");
//     }
//   }, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   const connectionSuccess = false;

//   setTimeout(() => {
//     if (connectionSuccess) {
//       resolve("Promise 2 Connection Success");
//     } else {
//       reject("Promise 2 Connection Failed");
//     }
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   const connectionSuccess = true;

//   setTimeout(() => {
//     if (connectionSuccess) {
//       resolve("Promise 3 Connection Success");
//     } else {
//       reject("Promise 3 Connection Failed");
//     }
//   }, 3000);
// });

// p1.then((result) => {
//   console.log(result);

//   p2.then((result) => {
//     console.log(result);

//     p3.then((result) => {
//       console.log(result);

//     }).catch((err) => console.log(err));

//   }).catch((err) => console.log(err));

// }).catch(err => console.log(err))

// p1 => p2 => p3

// (async function stablishConnection() {
//   try {
//     const result1 = await p1;
//     console.log(result1);
//     const result2 = await p2;
//     console.log(result2);
//     const result3 = await p3;
//     console.log(result3);
//   } catch (err) {
//     console.log(err);
//   }
// })();


(async function fetchTodoList() {
  const response = await fetch("http://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
})();
