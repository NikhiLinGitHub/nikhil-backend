
// let a = 10
// const b = 20
// var c = 30 // don't use it

// console.log(a)
// console.log(b)
// console.log(c)

// if(true) {
//     let d = 10 //local
//     const e = 20 //local
//     var f = 30 //global

//     console.log(d)
//     console.log(e)
// }

// console.log(f)


// function one() {
//     const username = "nikhil"

//     function two(){
//         const website = "youtube"
//         console.log(username)
//         console.log(website)
//     }
//     two()
// }

// one()

// if(true) {
//     const username = "nikhil"
//     if(username === "nikhil"){
//         const website = "youtube"
//         console.log(username + website)
//     }
// }

// function addOne(num) {
//     return num + 1
// }

// // console.log(addOne(5))

// const user = {
//     username: "nikhil",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`)  //'this' refers to the variable in the current context or local variable.
//     }
// }

// user.welcomeMessage()
// user.username = "rashad"

// console.log(this)  //in browser, the result is window

// function me(){
//     console.log(this)
// }

// me()

// Arrow funtion

// const me2 = () => {
//     console.log(this)
// }

// me2()

// const addTwo = (num1 , num2) => {
//     return num1 + num2       //exciplit return
// }

//const addTwo = (num1, num2) => (num1 + num2)  //implicit return //use in React

// const addTwo = (num1, num2) => ({username: "nikhil"}) //returning an object, put it in curly brackets

// console.log(addTwo(5, 6))

//Immediately Invoked Function Expressions (IIFE) (24)  //to get rid of global pollution

(function chai() {
    console.log(`DB connectced`) //name IIFE
})(); //parenthesis required in this case, as 2 objects are there

(() => {
    console.log(`DB CONNECTED TWO`)
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`) //unnamed IIFE
})('nikhil')