function printEveryOtherWord(arr_str) {
    for (let i = 0; i < arr_str.length; i=i+2) {
        console.log(arr_str[i]);
      }
}

printEveryOtherWord(["hello", "world", "i", "am", "felling", "better"])
printEveryOtherWord(["java", "javascript", "php"])