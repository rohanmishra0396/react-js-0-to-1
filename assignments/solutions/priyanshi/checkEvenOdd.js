function checkEvenOdd(value) {

    if (typeof value == "number") {
        if (value % 2 == 0) return "even";
        return "odd";
    }
    return "invalid number";

}

console.log(checkEvenOdd(null));
console.log(checkEvenOdd(undefined));
console.log(checkEvenOdd(3));
console.log(checkEvenOdd(0));
console.log(checkEvenOdd('five'));
