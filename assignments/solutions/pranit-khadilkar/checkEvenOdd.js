function checkEvenOdd(num) {
    if (typeof num === 'number') {
        if (num % 2 === 0) return 'even'
        return 'odd'
    }
    return 'invalid number'
}

console.log(checkEvenOdd(10))
console.log(checkEvenOdd(11))
console.log(checkEvenOdd('ten'))
console.log(checkEvenOdd(undefined))