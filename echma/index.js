// 1) let & const--------------------------------------------------------------

// var a = 5 ;
// let b = 10;
// const c = 15;

// console.log(a);

// 2) arrow fuctions-----------------------------------------------------------


// const arrowfun = () =>{

//     console.log("hello world")
// }

// arrowfun();

// function myfunc() {
//     console.log(arguments);
// }

// myfunc("hello");

// 3) array reduce method -----------------------------------------------------

// example 1

// const array = [1 ,2 , 3 , 4 , 5];

// const output = array.reduce((acc, current)=>{
//     return acc= acc + current;
// }, 0);

// console.log(output);

// example 2

// const numbers = [ "one" , "two" , "three" , "four" ];

// const allNumber = numbers.reduce((total,num) =>{
//     return total + " " + num;
// } ,);

 // console.log(numbers);
// console.log(allNumber);

// 4) default parameter--------------------------------------------------------

// const defaultPara = (a=4 , b=2 ) => {
//     console.log(a+b);
// }

// defaultPara();

// 5) rest parameter-----------------------------------------------------------

// example 1

// const sum = (...args) => {
//     console.log(args[5]);
// }

// sum(1,2,3,4,5,6,7,8);

// example 2
// function sum(...args){
//     let total = 0;
//     for(let a of args){
//         total += a ;
//     }
//     return total;
// }

// console.log(sum (1,2,3,4));


//template literals---------------------------------------------------------

// const name="abc";

// console.log("hello my name is" + " " + name);

// console.log(`hello welcome to ${name}`)


// 6)array destructuring-------------------------------------------------------

// simple array destructuring

// var err = ["html" , "css" , "js"];

// var [ one , two , three] = err;

// console.log(one);


// with custom value 

// var err = ["html" , "css" , "js"];

// var [ one , two , three , four = "java" ] = err

// console.log(four);


// use of array destructuring - example - swap 

// let sub1 = "html" ;
// let sub2 = "css" ;

// [sub1,sub2] = [sub2,sub1];

// console.log(sub2);

// 7) object destructuring-----------------------------------------------------

// simple object destructuring

// var myobj = {
//     name : "abc",
//     city : "pune"
// }

// var {name,city} = myobj;

// console.log(name);

// with custom object destructuring

// setting up new value 

// const myobj = {
//     name : "abc",
//     city: "pune"
// }

// var {name , city , contact = 12345678} = myobj;

// console.log(contact);


// 8)Spread operator-----------------------------------------------------------

// to copy value from one/ object into another array/ onject 

// example 1

// let err = ["one" , "two" , "three"];

// let err1 = [...err,"four"];

// console.log(err1)

// example 2

// const myobj = {
//     name : "abc"
// };

// const myNewObj = {
//     ...myobj,
//     city: "pune",
//     contact:12345678
// };

// console.log(myNewObj);


// 9)map function--------------------------------------------------------------

// let err = [1,2,3,4,5,6,7,8]; 

// const newArr = err.map(myfunc)

// function myfunc(element){
//     return element * 2;
// }

// console.log(newArr);

// err.map((cval) => {
//     console.log(cval);     // iterations
// })


// const numbers = [ 16 ,25 , 49];

// const newArr = numbers.map(Math.sqrt);

// console.log(newArr)


// 10) filter function --------------------------------------------------------

// let err = [1,2,3,4,5,6,7,8];

// const result = err.filter(checkNumber);

// function checkNumber(number){

//     return number < 5

// }

// console.log(result);

// 11) array.include-----------------------------------------------------------

// let err = [10,20,30,40,50,60,70];

// console.log(err.includes(80));

// 12) ES for -----------------------------------------------------------------

// let err = ["html" , "css" , "js" , "java"];

// for( let x in err){

//     console.log(err[x]);
// }

// 13) string padding----------------------------------------------------------

// let name = "20";

// console.log(name.padStart(15));
// console.log(name.padEnd(20) + "xyz");


// 14) object values ----------------------------------------------------------

// var myobj = {
//     name: "xyz",
//     course: "full stack",
//     detail: function(){
//         return this.name + this.course
//     }
// }

// console.log(Object.values(myobj));

// console.log(myobj);


// 15)Object.entries ----------------------------------------------------------

// var myobj ={
//     name :"xyz",
//     city : "pune",
//     detail: function(){
//         return this.name + this.city
//     }
// }

// console.log(Object.entries(myobj));


// 16)array concat ------------------------------------------------------------

// const arr1 = ["a" , "b" , "c"];
// const arr2 = [ "x" ,"y" , "z"];
// const arr3 = [ "m"];

// const children = arr1.concat(arr2, arr3);
// console.log(children);