// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumOfPositiveArray(array) {
    const positiveArray = [];
    let sumOfPositiveNumber = 0;
    for (let oneNumber of array) {
        if (oneNumber > 0) {
            positiveArray.push(oneNumber)
        }
    }
    for (let number of positiveArray) {
        sumOfPositiveNumber += number
    }
    return sumOfPositiveNumber
}
console.log(sumOfPositiveArray([2, -5, 10, -3, 7]));