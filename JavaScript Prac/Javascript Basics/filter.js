//filters
const nums = [1,2,3,4,5,6,7,8,9,10];
//const newNum = nums.filter ((val) => val > 4)                 // no need of return for condition

// const newNum = nums.filter((num) => {
//     return num > 4;                                           //use return when cursly braces 
// })
// console.log(newNum)

//using for each 
// const newNum = [];
// nums.forEach ((num) => {
//     if(num>4) {
//         newNum.push(num);
//     }
// })
// console.log(newNum);                                           //fitlter is preffered


//Using Map 
const newNums = nums.map ((num) => {
    return num + 10;
})
console.log(newNums)