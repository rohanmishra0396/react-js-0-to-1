function checkEvenOdd(num) {
    if(typeof num == 'string' || typeof num == 'undefined'){
        console.log("invalid number");
    }
    else {
        if (num %2 == 0){
            console.log("even");
        }
        else{
            console.log("odd");
        }
    }
}

checkEvenOdd(10)
checkEvenOdd(11)
checkEvenOdd("ten")
checkEvenOdd()