function checkPasswordStength(password) {
    if(password.length <= 5)
        console.log("weak");
    else if(password.length <= 10)
        console.log("medium");
    else if(password.length <= 20)
        console.log("strong");
    else
        console.log("very strong");
}


checkPasswordStength("weak");
checkPasswordStength("medium");
checkPasswordStength("strong password");
checkPasswordStength("very very strong password");