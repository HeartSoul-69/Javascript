//For each loop 

const coding = ["js", "cpp", "java", "ruby"];

coding.forEach (function (value) {
    //console.log(value);
})

coding.forEach ( (item) => {                              //Arrow Function
    //console.log(item);   
})


const myCoding = [
    {
        LanguageName : "Javascript",
        LanguageFileName: "JS"
    },
    {
        LanguageName:"Python",
        LanguageFileName : "Py"
    },
    {
        LanguageName : "C++",
        LanguageFileName : "CPP"
    }
]

myCoding.forEach((keys) => {
    console.log(keys.LanguageFileName)
})