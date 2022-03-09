function printEveryOtherWord(array) {
    for(let i =0; i< array.length; i++)
    {
        console.log(array[i]);
        i++;
    }
}

printEveryOtherWord(["hello", "world", "i", "am", "felling", "better"]);
printEveryOtherWord(["java", "javascript", "php"]);