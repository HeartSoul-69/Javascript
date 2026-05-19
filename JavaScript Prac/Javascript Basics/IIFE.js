// Immidiate Invoke Function Expression 

(function name () {
    console.log("IIFE ho gya ree")
})();

(() => {
    console.log(`Do IIFE me semicolar lagana mat bhulna re`);
})();

( (name) => {
    console.log(`My name is, ${name}`);
})("Anurag")

// It is to avoid function pollution