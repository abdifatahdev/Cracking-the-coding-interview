function checkPermutation(str1, str2){

    // Get lengths of both strings
    let len1 = str1.length;
    let len2 = str2.length;

    // If length of both strings is not same,
    // then they cannot be Permutation
    if(len1 !== len2){
        return false;
    }
    
    // Sort both strings
    let sorted1 = str1.split('').sort();
    let sorted2 = str2.split('').sort();

    // Initialize two pointer
    let pointer1 = 0;
    let pointer2 = 0;

    // Check if the two pointers are pointing the same character
    // If NOT we're done, they cannot be permutation
    // Otherwise we have to move up each pointer once
    while(sorted1[pointer1] !== sorted2[pointer2]){
        return false;
    }
    pointer1++;
    pointer1++;

    return true;

    // for(let i=0; i<len1; i++){
    //     if(sorted1[pointer1] !== sorted2[pointer2]){
    //         return false;
    //     }else{
    //         pointer1++;
    //         pointer2++;
    //     }
    // }
    // return true;

}


// Sort both string and then compare the sorted strings
function checkPermutation(str1, str2){
    let len1 = str1.length;
    let len2 = str2.length;
    if(len1 !== len2){
        return false;
    }
    let sorted1 = str1.split('').sort();
    let sorted2 = str2.split('').sort();
    for(let i=0; i<len1; i++){
        if(sorted1[i] !== sorted2[i]){
            return false;
        }
    }
    return true;
}

console.log(checkPermutation("mom", "omm")); // true
console.log(checkPermutation("love", "loove")); // false => !== length
console.log(checkPermutation("hello", "olleh")); // true
console.log(checkPermutation("gkla", "lgak")); // true
console.log(checkPermutation("ioqtr", "qtoid")); // false
