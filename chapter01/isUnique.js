//Is Unique: 
//Implement an algorithm to determine if a string has all unique characters. 
//What if you cannot use additional data structures?


// Using UMPIRE Method: 

// 1. Understand - Clarify what the interviewer is asking for
// 2. Match - Identify similar patterns
// 3. Plan -  Come up with algorithm, proof it works
// 4. Implement -  Code 
// 5. Review - Test solution works as expected
// 6. Evaluate - Analyze run time and space complexity

// Sacrifice time for space (optimize for time)
// O(N) time | O(N) space --> where we gonna use additional space to return
function isUnique(str){
    let hashSet = {};
    let strToReturn = '';
    for(let char of str){
        if(!(char in hashSet)){
            strToReturn += char;
            hashSet[char] = 1;
        }
    }
    return strToReturn;
}

let str = "aabc";
console.log(isUnique(str));