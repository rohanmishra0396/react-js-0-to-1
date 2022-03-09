
var arr = ["hello", "world", "i", "am", "felling", "better"]

function printEveryOtherWord(arr) {
    for(var i = 0; i < arr.length; i += 2) {
        console.log(arr[i]);
    }
}

console.log(printEveryOtherWord(arr))