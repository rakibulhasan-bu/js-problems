// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built -in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(str) {
    const strArray = str.split("")
    let reverseArray = []
    for (let oneLetter of strArray) {
        reverseArray.unshift(oneLetter)
    }
    const reverseStr = reverseArray.join("")
    return reverseStr;
}

console.log(reverseString("hello world"));