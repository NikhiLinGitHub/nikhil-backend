
//ARRAYS
//sahllow copy - copy whose properties share the same references, deep copy - source and copy are independent3
const myArr = [0, 1, 2, 3, 4, 5]

//console.log(myArr[0])

//arr methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()
// myArr.pop()
// console.log(myArr[6])

// myArr.unshift(9, 8)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr)

// const newArr = myArr
// console.log(newArr)
// const newArr2 = myArr.join()
// console.log(newArr2)

// console.log("A ", myArr)
// //prinitng array on browser's console gives prototype section, for more functions.
// const myn1 = myArr.slice(1, 3)
// console.log(myn1)
// console.log("B ", myArr)

// const myn2 = myArr.splice(1, 3)
// console.log(myn2)
// console.log("C ", myArr)


const marvel_heros = ["Hulk", "Spiderman", "Ironman"]
const dc_heros = ["Flash", "Aquaman", "Superman"] 
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const all_heros2 = [...marvel_heros, ...dc_heros]
// console.log(all_heros2)

// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 0]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


// console.log(Array.isArray("nikhil"))
// console.log(Array.from("nikhil"))
// console.log(Array.from({name: "nikhil"}))

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3))

//objects - declarion, 1. literals 2. constructors

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nikhil",
    "full name": "Nikhil Kumar Mahato",
    age: 18,
    [mySym]: "mykey1",
    location: "Bokaro",
    email: "nikhil8579063660@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "nikhil@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "nikhil@microsoft.com"
// console.log(JsUser)

// JsUser.greeting = function(){
// console.log("Hello JS User")
// }

// JsUser.greeting2 = function(){
//     console.log(`Hello JS User, ${this.location}`)
//     }

// console.log(JsUser.greeting())
// console.log(JsUser.greeting2())

const tinderUser = new Object() //singleton
//console.log(tinderUser)

const tinderUser2 = {} //non-singleton

tinderUser2.id = "123abc"
tinderUser2.name = "Niku"
tinderUser2.isLoggedIn = false

// console.log(tinderUser2)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign(obj1, obj2) // obj1 act as a target and obj2 and the rest will act as a source,  obj4 === obj1
// console.log(obj3)
// console.log(obj1)
// console.log(obj4)

const target = {1: "a", 2: "b"}
const source = {3: "a", 4: "b"}
const source2 = {5: "a", 6: "b"}
const source3 = {7: "a", 8: "b"}
const returnedTarget = Object.assign(target, source, source2, source3) 

// console.log(target)
// console.log(returnedTarget)
// console.log(returnedTarget === target) //we can put {} before the target, in case if we don't want this condition.


// const users = [
//     {
//         id:1,
//         email:"nikhil@gmail.com"
//     },
//     {
//         id:1,
//         email:"nikhil@gmail.com"
//     },
//     {
//         id:1,
//         email:"nikhil@gmail.com"
//     },
//     {
//         id:1,
//         email:"nikhil@gmail.com"
//     },
//     {
//         id:1,
//         email:"nikhil@gmail.com"
//     },
//     {
//         id:1,
//         email:"nikhil@gmail.com"
//     },
//     {
//         id:1,
//         email:"nikhil@gmail.com"
//     }
// ]

// users[1].email
// console.log(tinderUser2)
// console.log(Object.keys(tinderUser2))
// console.log(Object.values(tinderUser2))
// console.log(Object.entries(tinderUser2))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))  //declare ob1 and and print it in browser console to see the prototype and all the functions related to the objects

const course = {
    courseName: "coding",
    price: "999",
    courseInstructor: "Nikhil"
}

// console.log(course.courseName)

// const {courseInstructor : Instructor} = course
// console.log(Instructor)

const navbar = ({company}) => {

}

// navbar(company = "nikhil")

//FUNCTIONS

function sayMyName(){
    console.log("N")
    console.log("I")
    console.log("K")
    console.log("H")
    console.log("I")
    console.log("L")
    }

//sayMyName()

function add(num1, num2) {
    console.log(num1 + num2)
}

// add(3, 5) ; add(5, "6")
// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2
//     return num1 + num2
// }
// const result = addTwoNumbers(5, 9)

// console.log("Result: ", result)

function loginUser(username) {
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUser())
// console.log(loginUser("niku"))

function calculateCartPrice(...num1) {
    return num1
}

//console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "nikhil",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}

// handleObject({
//     username: "rashad",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

//console.log(returnSecondValue([200, 400, 500, 700]))