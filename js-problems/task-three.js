// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function frequentNumber(array) {
    const high = Math.max(...array)
    let newArray = new Array(high + 1)
    for (let i = 0; i < array.length; i++) {
        newArray[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        newArray[array[i]] = newArray[array[i]] + 1;
    }

    const hg = Math.max(...newArray);
    return newArray.indexOf(hg)
}
console.log(frequentNumber([3, 5, 2, 5, 3, 3, 1, 4, 5, 5, 5, 5, 5]));
