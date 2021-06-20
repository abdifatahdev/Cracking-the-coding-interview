/* There are three types of edits that can be performed on strings: 
INSERT a character, REMOVE a character, or REPLACE a character. 
Given two strings, write a function to check if they are
one edit (or zero edits) away.

Test Case 1:
Input: pale, ple 
Output: true

Test Case 2:
Input: pales, pale
Output: true

Test Case 3:
Input: pale, bale 
Output: true

Test Case 4:
Input: pale, bake
Output: false

*/

// O(N) Time || O(1) Space
function oneAway(str1, str2){
    let maxEdits = 1;
    let long = str1.length > str2.length ? str1 : str2;
    let short = str1.length <= str2.length ? str1 : str2;

    let maxLen = Math.max(str1.length, str2.length);
    let diff = long.length - short.length;

    if(diff > maxEdits){
        return false;
    }

    for(let i = 0, j = 0; i < maxLen || j < maxLen; i++,j++){
        let char1 = long[i];
        let char2 = short[j];
        if(char1 !== char2){
            maxEdits--;
            if(maxEdits < 0){
                return false;
            }
            if(long[i + 1] === char2){ // Insert or delete
                i++;
            }
        }
    }
    return true;
}

// The same above solution but writing in diff way:
function oneAway(str1, str2){
    let maxEdits = 1;
    let maxLen = Math.max(str1.length, str2.length);
    let diff = Math.abs(str1.length - str2.length);

    if(diff > maxEdits){
        return false;
    }

    for(let i = 0, j = 0; i < maxLen || j < maxLen; i++,j++){
        let char1 = str1[i];
        let char2 = str2[j];
        if(char1 !== char2){
            maxEdits--;
            if(maxEdits < 0){
                return false;
            }
            if(char1 === str2[j + 1]){ // Inserted
                j++;
            } else if(str1[i + 1] === char2){ // Remove
                i++;
            }
        }
    }
    return true;
}

console.log(
    oneAway('pale', 'ple') === true, // Remove
    oneAway('pales', 'pale') === true, // Insert
    oneAway('pale', 'bale') === true, // Replace
    oneAway('pale', 'bake') === false
    );

console.log(oneAway('pale', 'bake')); // false