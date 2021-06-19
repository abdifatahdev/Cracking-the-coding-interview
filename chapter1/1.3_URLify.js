// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string.

// O(N) Time | O(N) Space
function URLify(str, len){
    let s = ""; // Modified string
    // str.length = total length of str including spaces @ end
    // len = gives the actual length of the string
    let endSpaces = str.length - len; // Calculate spaces at the end
    for(let i = 0; i < str.length - endSpaces; i++){
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

// SOLUTION 2 - using array data structure
// O(N) Time | O(N) Space
function URLify(str){
    const resArr = str.trim().split('');
    for(let i in resArr){
        if(resArr[i] === " "){
            resArr[i] = "%20";
        }
    }
    return resArr.join('');
}

// Test Cases:
console.log(URLify("Mr John Smith ", 13)); // => "Mr%20Joh%20Smith"
console.log(URLify("Mr John Smith ", 14)); // => "Mr%20Joh%20Smith%20"
console.log(URLify("   hi", 7)); // => "%20%20%20hi%20%20"
console.log(URLify("   hi", 3)); // => "%20hi"
console.log(URLify("", 0)); // => ""
console.log(URLify("", 2)); // => "%20%20"
console.log(URLify("hel lo", 6)); // => "hel%20lo"