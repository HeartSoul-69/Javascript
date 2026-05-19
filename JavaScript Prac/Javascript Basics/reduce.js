const array = [1,2,3,4,5]

// const MyTotal = array.reduce  ( function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval ;
// },0)
// console.log(MyTotal)


// //arrow function
// const Total = array.reduce ( (acc, currval) => acc + currval,0 )
// console.log(Total)


//Shoping cart
const cart = [
    {
        course:"js course",
        price :999
    },
    {
        course:"python course",
        price :1999
    },
    {
        course:"dsa course",
        price :2999
    },
]

const Total = cart.reduce ((acc,course) =>acc+course.price,0 )
console.log(Total);