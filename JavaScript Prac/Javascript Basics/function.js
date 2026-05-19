//Function
function greet() {
    console.log("Hello World");
}

function add(a,b){
    return (a+b);
}

function square(a) {
    return a*a;
}

function isEven (a) {
    if(a%2 == 0) {
        return true;
    }
    else {
        return false;
    }
}


//Arrow Function 
const add2 = (a,b) => {
    return a+b;
}

const square = (a) => {
    return a*a;
}

const greet = () => {
    console.log("Hello Bhay");
}

const multiply = (a,b) => {
    return a*b;
}


//Pattern Building
function integer(a) {
    if (a>0) {
        return "Positive"; 
    }
    else if (a<0) {
        return "Negative"; 
    }
    else {
        return "Zero"; 
    }
}

//takes string and returns length 
function stringLength(s) {
    return s.length;
}

//odd or even
function type(a) {
    if(a%2==0) {
        return "even";
    } 

    else {
        return "odd";
    }
}

//largest number 
function largest (a,b,c) {
    Math.max(a,b,c);
}

