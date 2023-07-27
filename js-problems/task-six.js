// Task 6: Create a program that generates a random password of a specified length.The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function randomPass() {
    let int = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let letter = ["a", 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let char = ["+", "-", "*", "/", "$", "#", "@", "%", "^", "&", "(", ")", ","]

    let password = char[Math.floor(Math.random() * 10)] + letter[Math.floor(Math.random() * 10)] + int[Math.floor(Math.random() * 10)] + letter[Math.floor(Math.random() * 10)].toUpperCase() + char[Math.floor(Math.random() * 13)] + letter[Math.floor(Math.random() * 10)]
    return password
}
console.log(randomPass());