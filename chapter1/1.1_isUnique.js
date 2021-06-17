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

// BRUTE FORCE(NAIVE)- solution
// O(N^2) Time | O(1) Space
function isUnique(str){
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            if(str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}

// MOST OPTIMAL- solution
// Sacrifice time for space (optimize for time)
// O(N) time | O(N) space --> where we gonna use additional space to return
function isUnique(str){
    let map = {};
    for(let char of str){
        if(!map[char]){
            map[char] = 1;
        } else{
            map[char]++;
        }
        if(map[char] > 1){
            return false;
        }
    }
    return true;
}

console.log(isUnique("abc")); // true
console.log(isUnique("abca")); // false
console.log(isUnique("abcdef")); // true
console.log(isUnique("abcdefhjab")); // false