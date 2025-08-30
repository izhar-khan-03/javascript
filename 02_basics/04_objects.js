// const tinderUser = new Object()   // Singleton Object 
const tinderUser = {}   // Non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "izhar",
            lastname: "khan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // place an empty object to get a guaranted new object to get all the data from other objects other without an empty braces, all the values will be copied to the first object

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const Users = [
    {
        id: 1,
        email: "i@gmail.com",
        rollno: 231422
    },
    {

    },
    {

    },
    {

    }
]

Users[1].email

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course    // in braces, we can change name of the key so that it is more readable and can be printed with a short name ex . const {courseInstructor: instructor} = course for const {courseInstructor} = course   which is known as DESTRUCTURING

console.log(instructor);


// {
//     "name": "izhar",
//     "coursename": "JavaScript",
//     "price": "free"

// }