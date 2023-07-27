// Task 7: Implement a function that converts a Roman numeral to an integer.The function should take a Roman numeral string(e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(RomanNumber) {
    let ans = 0;
    for (let i = 0; i < RomanNumber.length; i++) {
        if (RomanNumber[i] == "I") {
            ans++;
        }
        else if (RomanNumber[i] == "V") {
            ans += 5;
        }
        else if (RomanNumber[i] == "X") {
            ans += 10;
        }
        else if (RomanNumber[i] == "L") {
            ans += 50;
        }
    }
    if (RomanNumber[0] == "I" && RomanNumber[1] != "I") {
        ans -= 2;
    }
    return ans;
}
console.log(romanToInteger("IIV"));