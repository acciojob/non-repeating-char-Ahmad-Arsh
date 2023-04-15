//your JS code here. If required.
function firstNonRepeatedCharacter(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

let inputString = prompt("Enter a string: ");
let result = firstNonRepeatedCharacter(inputString);
alert( result);