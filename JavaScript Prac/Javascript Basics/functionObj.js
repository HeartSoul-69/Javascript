function TotalPrice(val1, val2 , ...nums) {                 // ...num defines nth place 
    return nums;
}

//Prints only last 3 values as other 2 are stored in val1 & val2
console.log(TotalPrice(1200,300,500,2400,700));    


//Object
const User = {
    name : "Anurag",
    price : "199",
}

//function
function HandleUser(AnyObject) {
    console.log( `Username is ${AnyObject.name} & Price is ${AnyObject.price}`);
}

HandleUser(User)


const NewArray = [200, 400, 420, 700]


function returnsecondvalue(getArray) {
    return getArray[3];
}

console.log(returnsecondvalue(NewArray))