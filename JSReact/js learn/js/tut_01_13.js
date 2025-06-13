
/*
console.log("hello")

const account_Id = 1516
let accountEmail = "niku69@gmail.com"
var accountPassword = "123456"  //var shouldn't be used anywhere because a lot of issue will faced in block and functional scope. 
accountCity = "Jaipur"
let accountState

console.log(account_Id)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountState)

console.table([account_Id,accountEmail,accountPassword, accountCity, accountState])

*/


//"use strict"; //treat all the JS code as newer version

//alert(3+3) we are using node,js not browser

// console.log(typeof null) //object

// let score = 33
// console.log(typeof (score))

// let value = Number(score)
// console.log(typeof (score))
// console.log(score)


// operations

// let value = 3
// let negvalue = -value
// console.log(negvalue)

// console.log(2+2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**2)

// let str1 = "hello"
// let str2 = "nikhil"

// let str3 = str1 + str2

// console.log(str3)

// console.log("1" + 2)
//console.log("1" + "2")

//prefix and postfix increment/decrement

// console.log(2 < 1)
// console.log(undefined == null)
// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(null == 0)
// console.log(null > 0)

// console.log("2" == 2)
// console.log("2" === 2)

//PRIMITIVE data Type, so we get a copy of the value when using them anywhere. 7 types - string, number, boolean, null, undefined, symbol, BigInt
//Reference data Type, arrays, objects, Funtions

// const id = Symbol('123')
// const id2 = Symbol('123')

// console.log(id === id2)
// const bigNum = 3287189787987n


// const heros = ["shaktimaan", "naagraj", "doga"]
// let myObj = {
//     name: "nikhil",
//     age: 22
// }

// const myFunction = function(){
//     console.log("HEllo World")
// }

// console.log(typeof bigNum)
// console.log(typeof heros)
// console.log(typeof myObj)
// console.log(typeof myfunction)


//Stack (Primitive) , Heap (Non-Primitve)

// const name = "nikhil"
// const count = 24

// console.log(`my name is ${name} and i have ${count} apples.`)

// const gameName = new String('nikhilug')

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())

// const newString = gameName.substring(0, 4)
// console.log(newString)

// const anotherString = gameName.slice(-6, 4)
// console.log(anotherString)

// const url = "#"

// console.log(url.replace('#', '-'))
// console.log(url.includes('sundar'))

//use browsr console , to know more functions name, write a string then dot . , then you get a lot of option.

// const balance = 100
// console.log(balance)
// console.log(balance.toString().length)

// const otherNUm = 1123.2589
// console.log(otherNUm.toPrecision(4))

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US'))
// console.log(hundreds.toLocaleString('en-IN'))

// MATHS

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4, 3, 8, 6))
// console.log(Math.max(7, 6, 5, 1))

// console.log(Math.random()) //0-1 
// console.log((Math.random()*10) + 1)

// const min = 10
// const max = 20

// console.log(Math.random() * (max - min + 1))
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//Dates

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 6, 5, 3)
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

// let newerDate = new Date()
// console.log(newerDate)
// console.log(newerDate.getDay())

// //`${newerDate.getDate()}`

// newerDate.toLocaleString('default', {
//     weekday: "long"
// })


