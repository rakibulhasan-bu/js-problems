// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers.The function should return the second smallest number.

function secondSmallestNumber(array) {
    const ascendingArray = array.sort(function (a, b) { return a - b })
    return ascendingArray[1]
}
console.log(secondSmallestNumber([1, 5, 6, 12, 3, 9, 86, 13, 14]));