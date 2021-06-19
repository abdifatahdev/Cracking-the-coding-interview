// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string.

function URLify(str, len){
    let s = "";
    let endSpaces = str.length - len;
    for(let i = 0; i < str.length; i++){
        if(i < (str.length - endSpaces)){
            if(str[i] === " "){
                s += "%20";
            } else{
                s += str[i];
            }
        }
    }
    return s;
}

// Test Cases:
console.log(URLify("Mr John Smith ", 13)); // => "Mr%20Joh%20Smith"
console.log(URLify("Mr John Smith ", 14)); // => "Mr%20Joh%20Smith%20"
console.log(URLify("   hi", 7)); // => "%20%20%20hi%20%20"
console.log(URLify("   hi", 3)); // => "%20hi"
console.log(URLify("", 0)); // => ""
console.log(URLify("", 2)); // => "%20%20"
console.log(URLify("hel lo", 6)); // => "hel%20lo"