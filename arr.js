//  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//  "This is an example!" ==> "sihT si na !elpmaxe"
//  "double  spaces"      ==> "elbuod  secaps"



let str = "Димка, мальчик мой, хули случилось?";

function reverseWords(str) {
    let cutStr = str.split(" ");

    for (let i = 0; i < cutStr.length; i++) {
        cutStr[i] = cutStr[i].split("").reverse().join("");
    }

    let newStr = cutStr.join(" ");

    return newStr;
}


console.log(reverseWords(str));