// * higher order function and callback function ------------------------------
// function greeting(name) {
//     console.log(`hello, ${name}`);
// }

// function userInput(callback){
//     const name = "supriya";
//     callback(name);
// }

// userInput(greeting);

// example2************************************************

// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }

// function Task(a,b, callback){
//     var output= callback(a,b);
//     console.log(output);
// }
// Task(20,10,mul);

// example3************************************************

// function morning(name){
 
// console.log(`good morning, ${name} `)
// }

// function afternoon(name){
   
//     console.log(`good afternoon, ${name}`)

// }

// function evening(name){
//     console.log(`good evening, ${name}`)
// }

// function greet(callback){
//     const name = "john"; 
//     callback(name);
// }
// greet(afternoon);

// Exception handling--------------------------------------

// 1) throw statement 

// var a = 10;
// var b = 0;

// if (b!== 0){
//     var output = a/b;
//     console.log(output)
// }
// else{
//     throw("dont divide by 0");
// }

//  2)try statement 

// try{  
//     var a=5;
//     console.log(a)
//  }   
// catch(error){  
//     console.log("There is an error:" + error)
//  }   


// 3) try...catch...finally statement 

// try {
//     var a = 5 ;
//     console.log(a);
// }

// catch(e)
// {
//     console.log("error: "+ e);
// }
// finally
// {
//     console.log("this execute any way!");
// }


// async...await ---------------------------------------------------------------------------

// example1********************************************************************
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => {

//         data.map((cval) => {
//             console.log(cval.name);
//         })

//     }).catch((err) => {
//         console.log(`data is not collected because of ${err} `)
//     })


// example2------

// const getData = async () => {

//     const res = await fetch('https://jsonplaceholder.typicode.com/users');

//     const data = await res.json();

//     data.map((cval) => {
//         console.log(cval.name);
//     })
// }
//  getData();



// const getData = async() => {

//     try{

//         const res =await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
        
//         data.map((cval) => {
//             console.log(cval.name);
//         })
//     }catch(err){
//         console.log(`error is : ${err}`)
//     }

// }

// getData();


// function currying--------------------------------------

// function printNumber(a){

//     return function(b){

//         return function(c){

//             return function(d){

//                 return function(e){

//                     console.log(a,b,c,d,e)
//                 }
//             }
//         }
//     }
// }


// printNumber(1)(2)(3)(4)(5);


// example2----------------

// function fun1(a){

//     console.log(a)

//     return function(b){
//         console.log(b)

//         return function(c){
//             console.log(c)
//         }
//     }
// }

// fun1(10)(20)(30);