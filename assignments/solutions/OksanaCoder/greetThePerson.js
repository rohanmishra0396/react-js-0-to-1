
function greetThePerson(name) {
    if (name && typeof name !== 'number') {
        return `Hello, ${name}! How are you?`
    } else {
        return `Hello World! How are you?`
    }
}

console.log(greetThePerson(100))