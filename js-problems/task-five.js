// Task 5: Implement a simple JavaScript calculator.The calculator should take two numbers and an operator(+, -, *, /) as input and return the result of the operation.

function sumOfTwoNumber(a, b, c) {
    if (b == '+') {
        return a + c
    }
    else if (b == "-") {
        return a - c
    }
    else if (b == "*") {
        return a * c
    }
    else if (b == "/") {
        return a / c
    }

}
console.log(sumOfTwoNumber(5, "+", 6));