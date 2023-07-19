// const Person = {
//         name: "Jimmy",
//         age: 3,
//         gender: "male",
    
//         display: function(){
//             console.log(this.name);
//             console.log(this.age);
//             console.log(this.gender);
//         }
//     };
    
    
//     Person["display"]();

//   CONSTRUCTORS------------------------------------------------------
function Person (name ,age ,gender,city){
this.name = name,
this.age = age,
this.gender = gender,
this.city = city,

this.display = function(){
    return this.name + ': '+this.age + ': '+ this.gender +': ' + this.city ;
}
}

let p1 = new Person('maggi', 30, 'female', 'pune');
console.log(p1.display());

let p2 = new Person('abc', 20, 'male', 'pune');
console.log(p1.display());

// PROTOTYPE-------------------------------------------------------------------------

// function Person(name, age, gender, city){
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.city = city;

 

// }
// Person.prototype.numEyes = 2;

// let p1 = new Person("abc" , 2 , "female" , " city");
// console.log(p1.numEyes)



// INHERITANCE-----------------------------------------------------------------------

// class Person{
//   constructor(name , std , city ){
//     this.name = name ;
//     this.std = std ;
//     this.city = city ;
//   }
//   gender(){
//     console.log("female " + this.name + ':'+ this.std + ":" + this.city);
//   }
// }

// class Student extends Person{
//   constructor(name,std,city){
//     super(name);
//     this.std = std;
//     this.city  = city;
//   }
// }

// var s1 = new Student(" abc" , 2 , "pune");
// s1.gender();

// METHOD OVER-RIDING  &  OVER-LOADING ------------------------------------------------------

// class Polygon{
//     describe(){
//         console.log(" I am a Polygon")
//     }
//     area(sideA , sideB){
//         return sideA * sideB
//     }
// }

// class sqaure extends Polygon{
//     describe(){
//         console.log("I am Square")
//     }
//     area(sideA){
//         return sideA * sideA;
//     }
// }

// var sqaure1 = new Polygon();
// console.log(sqaure1.area(8 , 9));



//POLYMORPHISM--------------------------------------------------------------------------


// class Person{
//     speak(){
//         console.log("Person speak diffrent language");
//     }
// }

// class Indian extends Person{
// speak(){
//     console.log("Indian  speak Hindi language");
// }
// }

// class American extends Person{
//     speak(){
//         console.log("American  speak English language");
//     }
//     }

//     var per1 = new Person();
//     var Person1 = new Indian();
//     var Per2 = new American();

//     per1.speak();
//     Person1.speak();
//     Per2.speak();


// ABSTRACTION-----------------------------------------------------------------


// function Person(){
//     this.name = "xyz";
//     if(this.constructor === Person){
//         throw new Error("Already have account");
//     }
// }

// Person.prototype.info = function(){
//     return "Person Name is " + this.name ;
// }

// var Person1 = new Person();


// ENCAPSULATION-------------------------------------------------------------


// function myarray(){
//     data = [ 1, 2 , 3 , 4 ,5 ];

//     function double(){
//         for(let i= 0; i< data.length; i++){
//             data[i] = data[i] * 2;
//         }

//         return data;
//     }
//     return double;
// }

// let amethod = myarray();
// let doublearray = amethod();
// console.log(doublearray);