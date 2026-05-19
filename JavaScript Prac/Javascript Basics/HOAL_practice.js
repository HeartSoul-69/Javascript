//High order array loop questions 

//Q1. Print all elements of an array using for...of

let array = [1,2,3,4,5,6];

for(const value of array) {
    //console.log(value);
}


//Q2. Print all indexes of an array using for...in
for(const index in array) {
    //console.log(index);
}

//Q3. Print all values of an array using forEach

array.forEach( function (key) {
   // console.log (key);
})


//Q4. Print all keys of an object using for...in

for(const index in array) {
  //  console.log(index);
}

//Q5. Find the sum of all elements in an array using a loop
let sum = 0;
for(let num of array) {
    sum += num;
}
//console.log(sum);

//Q6. Count how many even numbers are present in an array
let n = array.length;
let count = 0;
for(let i=0; i<n ; i++) {
    if(array[i]%2) {
    count++;
    }
} //console.log(count);


//Q7. Print only the string values from a mixed array
const array2 = [1,"a",3,"y",5,"i",];

array2.forEach ((item) => {
    if(typeof item === "string") {
        //console.log(item);
    }
})

//Q8. From an object, print key-value pairs in this format => key : value

const array3 = [
    {
        brand : "maruti",
        specs : "Speed"
    },
    {
        brand : "honda",
        specs : "durable"
    },
    {
        brand : "swift",
        specs : "cool"
    },
]

array3.forEach ( (keys) => {
    console.log(`${keys.brand}  :  ${keys.specs} `)
})

