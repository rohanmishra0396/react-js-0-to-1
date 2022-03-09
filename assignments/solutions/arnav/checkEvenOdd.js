function checkEvenOdd(number) {
    if(isNaN(number))
    console.log('invalid number');
    else if(number % 2 == 0)
        console.log('even');
    else
        console.log('odd');
}

checkEvenOdd(10);
checkEvenOdd(11);
checkEvenOdd("ten");
checkEvenOdd(undefined);