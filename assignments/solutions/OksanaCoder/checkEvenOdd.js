function checkEvenOdd(x) {
    if (x % 2 === 0) {
        return `even`
    } else if (typeof x === 'string') {
        return 'invalid number'
    } else {
        return `odd`
    }
}
console.log(checkEvenOdd(3))
